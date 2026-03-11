import pytest
from main import greet, add

def test_greet_normal():
    assert greet("Alice") == "Hello, Alice! Welcome to OpenAgents."

def test_greet_empty():
    with pytest.raises(ValueError):
        greet("")

def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0
    assert add(0, 0) == 0
