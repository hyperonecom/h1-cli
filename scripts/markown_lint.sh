#!/bin/sh
echo "Run the Markdown file verification script.";

ANY_FAILED=false;

echo "## TEST 1";
echo "Code block markers should appear in pairs. If you do not occur in pairs - may indicate a fail to close the blocks.";
echo "The situation concerns files:";
find bin -name '*.md' -print0 | xargs -0 grep -E -e '^```(bash)*$' -c | grep -v -E -e ':(2|4|6|8|10|12)$' && ANY_FAILED="true" || echo "**All files pass.**";

echo "## RESULT";
echo "Finished the Markdown file verification script.";

test "$ANY_FAILED" = "false"