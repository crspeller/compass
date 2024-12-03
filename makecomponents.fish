#!/usr/bin/env fish

# Check for the directory argument
if test (count $argv) -ne 1
    echo "Usage: $0 <directory>"
    exit 1
end

# Get the directory from the first argument
set dir $argv[1]

# Ensure directory exists
if test ! -d $dir
    echo "Error: Directory '$dir' does not exist."
    exit 1
end

# Iterate over each image file in the specified directory
for img in $dir/*.{jpg,jpeg,png,gif}  # Add other image formats as needed
    # Extract the filename without extension
    set filename (basename $img | sed 's/\.[^.]*$//')

    # Construct the commands for the `aider`
    set command1 "aider --yes --read '$img' --read src/components/Button.tsx --read src/components/styles/variables.ts --message 'Lets add the $filename component. Create a src/components/$filename.tsx and keep all code in there.'"
    set command2 "aider --yes --file src/components/$filename.tsx --file src/index.ts --file test-app/TestApp.tsx --message 'Add the $filename component to the test app. You will need to add it to the index.ts.'"

    # Execute the commands
    echo "Executing: $command1"
    eval $command1

    echo "Executing: $command2"
    eval $command2
end
