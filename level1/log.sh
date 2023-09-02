


# Specify the starting directory for the search (typically the root directory).
search_directory="/"

# Find the largest "x.log" file on the entire computer.
largest_log_file=$(find "$search_directory" -name "x.log" -exec ls -l {} \; 2>/dev/null | sort -nk 5,5 | tail -n 1)

# Check if a "x.log" file was found.
if [ -n "$largest_log_file" ]; then
    # Truncate the largest "x.log" file to 100 lines.
    head -n 100 "$largest_log_file" > "$largest_log_file.tmp"
    mv "$largest_log_file.tmp" "$largest_log_file"
    echo "Truncated $largest_log_file to 100 lines."
else
    echo "No 'x.log' file found on the entire computer."
fi
