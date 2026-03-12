from app import greet


def test_greet():
    assert greet("OpenAgents") == "Hello, OpenAgents!"
