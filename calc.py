   def add(a, b):
       return a + b
   EOF

   cat > test_calc.py <<'EOF'
   from calc import add

   def test_add():
       assert add(2, 3) == 5
   EOF
