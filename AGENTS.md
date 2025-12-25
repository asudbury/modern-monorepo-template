# AI Agents & Automation

This document describes the AI agents and automation tools used in this repository to enhance development workflow and maintain code quality.

## GitHub Copilot

This repository is optimized for use with GitHub Copilot, providing intelligent code completion and generation capabilities across all packages and apps.

### Features

- **Context-aware suggestions**: Copilot understands the monorepo structure and provides relevant suggestions for each package
- **Type-safe completions**: Full TypeScript support with strict mode across all packages
- **React 19 patterns**: Suggestions follow modern React 19 best practices
- **Accessibility focus**: Copilot suggestions incorporate WCAG 2.2 AA accessibility patterns
- **Test generation**: Assists with writing tests using Vitest and React Testing Library

### Configuration

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for detailed Copilot configuration and coding guidelines.

## GitHub Copilot Workspace Agent

The repository includes a GitHub Copilot Workspace agent workflow for automated code reviews, refactoring, and issue resolution.

### Capabilities

- **Code Review**: Automated code review on pull requests
- **Issue Resolution**: Can automatically address and fix issues
- **Documentation**: Generates and updates documentation
- **Refactoring**: Suggests and implements code improvements
- **Testing**: Creates test cases for new features

### Usage

The Copilot agent is automatically triggered on pull requests and can be invoked with comments:
- `@copilot fix the build errors`
- `@copilot add tests for this component`
- `@copilot update the documentation`
- `@copilot review this code`

## Automated Quality Checks

### Husky Git Hooks

Pre-commit and commit-msg hooks ensure code quality before commits:
- **Pre-commit**: Runs linting and formatting
- **Commit-msg**: Validates commit messages follow Conventional Commits

### GitHub Actions CI

Automated CI workflow runs on all pull requests:
- Linting with ESLint
- Type checking with TypeScript
- Unit tests with Vitest
- E2E tests with Playwright
- Build verification
- Unused code analysis with Knip

See [.github/workflows/ci.yml](.github/workflows/ci.yml) for the complete CI configuration.

## Dependency Management

### Dependabot

Automated dependency updates with security checks:
- Daily scans for security vulnerabilities
- Weekly dependency updates
- Automatic PR creation for updates

## Code Quality Tools

### ESLint

Static code analysis with:
- TypeScript support
- React best practices
- Accessibility checks (jsx-a11y)
- Consistent code style enforcement

### Prettier

Automatic code formatting on save and pre-commit:
- Consistent code style across the monorepo
- Integration with ESLint

### Knip

Unused code and dependency detection:
- Finds unused files
- Identifies unused exports
- Detects unused dependencies
- Non-blocking in CI (informational only)

## TypeScript Language Server

Full TypeScript language server support provides:
- Intelligent autocomplete
- Real-time type checking
- Refactoring suggestions
- Import organization

## Best Practices for Working with AI Tools

### When Using Copilot

1. **Be explicit**: Write clear comments describing what you want
2. **Review suggestions**: Always review and test AI-generated code
3. **Provide context**: Include types and interfaces for better suggestions
4. **Iterate**: Refine suggestions by providing more specific requirements

### When Working with Copilot Agent

1. **Be specific**: Clearly describe the task or issue
2. **Provide examples**: Include code samples when requesting changes
3. **Review changes**: Always review agent-generated pull requests
4. **Test thoroughly**: Verify all automated changes work as expected

## Contributing

When contributing to this repository:
- Let Copilot assist with boilerplate code
- Use the Copilot agent for code reviews
- Ensure all AI-generated code passes tests and linting
- Review and understand all AI suggestions before accepting

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

## Troubleshooting

### Copilot Not Working

1. Ensure you have GitHub Copilot access enabled
2. Install the Copilot extension in your IDE
3. Restart your IDE after installation
4. Check Copilot status in your IDE's status bar

### Agent Not Responding

1. Ensure you mention `@copilot` in your comment
2. Check that the Copilot workspace is enabled for the repository
3. Verify you have proper permissions in the repository

## Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Copilot Best Practices](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot)
- [GitHub Copilot Workspace](https://githubnext.com/projects/copilot-workspace)
