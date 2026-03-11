def greet(name: str) -> str:
    """Return a greeting message."""
    if not name:
        raise ValueError("Name cannot be empty")
    return f"Hello, {name}! Welcome to OpenAgents."

def add(a: int, b: int) -> int:
    """Add two numbers."""
    return a + b

if __name__ == "__main__":
    print(greet("OpenAgents"))
    print(f"2 + 3 = {add(2, 3)}")
