# Testing Patterns

- Run project-native tests for impacted modules (framework=unknown)
- Add or adjust tests that cover modified acceptance criteria
- Run project-native tests for impacted modules (framework=none currently configured)
- Build/Test command: npm run lint
- Build/Test command: "D:\autonomous-dev-agent\.venv\Scripts\python.exe" -m pytest tests/test_calculator.py tests/test_ui.py tests/test_history.py -v --tb=short -x --rootdir=. --confcutdir=. -p no:flask
- Build/Test command: "D:\autonomous-dev-agent\.venv\Scripts\python.exe" -m pytest tests/test_dashboard.py tests/test_filters.py tests/test_visualization.py tests/test_predictions.py -v --tb=short -x --rootdir=. --confcutdir=. -p no:flask
- Build/Test command: npm run build
