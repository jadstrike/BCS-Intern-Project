# Cursor Prompting Rules

## Context first

- Always reference files or docs with @ before asking for changes.
- Prefer small selections, 5 to 50 lines, for inline edits.

## Plan then act

- Ask for a plan. Review. Then say Act to execute.
- For large tasks, split into steps and iterate.

## Safety

- Commit before multi-file edits.
- Use YOLO only on a throwaway branch.

## Model choice

- Use deeper models for reasoning and large context.
- Use faster models for boilerplate generation.
