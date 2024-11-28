JS_DIRS=$(find "." -type f -name "*.js" | sort -u)
JS_CNT=$(find "." -type f -name "*.js" | sort -u | wc -l)

echo "" > README.md
echo "# Algorithm-study" >> README.md
echo "" >> README.md
echo "자바스크립트 알고리즘 공부" >> README.md
echo "" >> README.md
echo "누적 : $JS_CNT" >> README.md
echo "" >> README.md
echo "| 제목 | 레벨 | 파일 | 날짜 | 비고 |" >> README.md
echo "| --- | --- | -- | -- | --- |" >> README.md

entries=()

for JS_DIR in $JS_DIRS; do
    FULL_DATETIME=$(git log --diff-filter=A --format='%ad' --date=iso -- $JS_DIR)
    DATETIME=$(git log --diff-filter=A --format='%ad' --date=short -- $JS_DIR)
    title=$(grep "//title:" "$JS_DIR" | sed -n 's/.*\/\/title:\(.*\)/\1/p')
    level=$(grep "//level:" "$JS_DIR" | sed -n 's/.*\/\/level:\(.*\)/\1/p')
    etc=$(grep "//etc:" "$JS_DIR" | sed -n 's/.*\/\/etc:\(.*\)/\1/p')
    JS_FILE=$(basename "$JS_DIR")
    entries+=("$(echo "$FULL_DATETIME|$DATETIME|$title|$level|[$JS_FILE]($JS_DIR)|$etc" | tr -d '\r')")
done

for entry in $(printf "%s\n" "${entries[@]}" | sort -t "|" -k 1); do
    IFS="|" read -r full_datetime date title level file etc <<< "$entry"
    echo "| $title | $level | $file | $date | $etc |" >> README.md
done

# Remove any blank lines
sed -i '/^$/d' README.md

git add README.md
IS_GENERATED_MD=$(git status --porcelain | grep README.md)

if [ -n "$IS_GENERATED_MD" ]; then
    git commit -m "add : README.md" --author "Seokwoodang <swoo1429@naver.com>"
    git push origin
else
    echo "No changes detected in README.md"
fi