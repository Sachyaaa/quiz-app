export const questions = [
    {
        "id": 1,
        "question": "Given the declarations:\n int a = 5, b = 10;\n Which of the following correctly declares an int variable named `sum` and initializes it with the result of adding `a` and `b`?",
        "options": [
            "int sum = a + b;",
            "int sum = a add b;",
            "int sum = a, b;",
            "int sum = a +;"
        ],
        "answer": "int sum = a + b;",
        "description": "Option A correctly declares and initializes the variable `sum` by adding `a` and `b`."
    },
    {
        "id": 2,
        "question": "Which of the following code blocks correctly demonstrates both a single-line and a multi-line comment in Java?",
        "options": [
            "// Single-line comment /* Multi-line comment */",
            "<!-- Single-line comment --> // Multi-line comment",
            "/* Single-line comment */ # Multi-line comment",
            "// Single-line comment <!-- Multi-line comment -->"
        ],
        "answer": "// Single-line comment /* Multi-line comment */",
        "description": "Option A shows the correct syntax for single-line (//) and multi-line (/* */) comments in Java."
    },
    {
        "id": 3,
        "question": "What is the output of the following code snippet?\n public class Main { \n public static void main(String[] args) { \n int a = 10, b = 5;\n System.out.println((a + b) * 2); \n} }",
        "options": [
            "30",
            "25",
            "20",
            "15"
        ],
        "answer": "30",
        "description": "The expression (a + b) * 2 evaluates to (10 + 5) * 2 = 30."
    },
    {
        "id": 4,
        "question": "Which of the following is NOT a primitive data type in Java?",
        "options": [
            "int",
            "double",
            "String",
            "boolean"
        ],
        "answer": "String",
        "description": "In Java, `String` is a class, not a primitive data type."
    },
    {
        "id": 5,
        "question": "What will be the output of the following code?\n public class Main {\n public static void main(String[] args) {\n boolean flag = (5 > 3);\n System.out.println(!flag);\n } }",
        "options": [
            "true",
            "false",
            "Compilation Error",
            "Runtime Error"
        ],
        "answer": "false",
        "description": "The expression (5 > 3) evaluates to true, so !flag is false."
    },
    {
        "id": 6,
        "question": "Given the code below, what is the output?\n public class Main {\n public static void main(String[] args) {\n int x = 5;\n System.out.println(x++ * 2);\n } }",
        "options": [
            "10",
            "12",
            "5",
            "11"
        ],
        "answer": "10",
        "description": "The post-increment operator returns the current value before incrementing, so 5 * 2 = 10."
    },
    {
        "id": 7,
        "question": "What is the output of the following code?\n public class Main {\n public static void main(String[] args) {\n char ch = 'A';\n System.out.println((int) ch + 1);\n } }",
        "options": [
            "65",
            "66",
            "67",
            "64"
        ],
        "answer": "66",
        "description": "The ASCII value of 'A' is 65; adding 1 results in 66."
    },
    {
        "id": 8,
        "question": "What is the default value of an uninitialized local int variable in Java?",
        "options": [
            "0",
            "null",
            "A garbage value",
            "It causes a compilation error"
        ],
        "answer": "It causes a compilation error",
        "description": "Local variables in Java must be initialized before use; otherwise, it causes a compilation error."
    },
    {
        "id": 9,
        "question": "What is the output of the following code?\n public class Main {\n public static void main(String[] args) {\n double d = 9.99;\n int i = (int) d;\n System.out.println(i + 1);\n } }",
        "options": [
            "10",
            "9",
            "11",
            "10.99"
        ],
        "answer": "10",
        "description": "Casting 9.99 to int results in 9; adding 1 gives 10."
    },
    {
        "id": 10,
        "question": "What is the output of the following code snippet?\n public class Main {\n public static void main(String[] args) {\n int result = 17 % 5 + 2;\n System.out.println(result);\n } }",
        "options": [
            "4",
            "5",
            "2",
            "7"
        ],
        "answer": "4",
        "description": "17 % 5 equals 2; adding 2 results in 4."
    },
    {
        "id": 11,
        "question": "Which of the following commands correctly compiles a Java program named `Main.java` from the command line?",
        "options": [
            "java Main.java",
            "javac Main.java",
            "java Main",
            "compile Main.java"
        ],
        "answer": "javac Main.java",
        "description": "The `javac` command compiles Java source files into bytecode."
    },
    {
        "id": 12,
        "question": "What will be the output of the following code?\n public class Main {\n public static void main(String[] args) {\n int x = 5;\n int y = x++ + ++x * 2;\n System.out.println(y);\n } }",
        "options": [
            "17",
            "19",
            "21",
            "23"
        ],
        "answer": "19",
        "description": "The expression evaluates as follows: x++ returns 5 (then x becomes 6) and ++x increments x to 7, so the multiplication gives 7 * 2 = 14; then 5 + 14 = 19."
    },
    {
        "id": 13,
        "question": "Which of the following statements about Java's type conversion is true?",
        "options": [
            "Widening conversion (e.g., int to double) happens automatically.",
            "Narrowing conversion (e.g., double to int) happens automatically.",
            "Both widening and narrowing conversions happen automatically.",
            "Java does not support type conversion."
        ],
        "answer": "Widening conversion (e.g., int to double) happens automatically.",
        "description": "Widening conversions are done automatically by Java, whereas narrowing conversions require explicit casting."
    },
    {
        "id": 14,
        "question": "What is the output of the following code?\n public class Main {\n public static void main(String[] args) {\n int a = 10, b = 15;\n System.out.println((a < b) && (a + 5 == b) || (a == b));\n } }",
        "options": [
            "true",
            "false",
            "Compilation Error",
            "Runtime Error"
        ],
        "answer": "true",
        "description": "The expression (a < b) is true and (a + 5 == b) is true, so their AND is true; then true OR (a == b) remains true."
    },
    {
        "id": 15,
        "question": "What will be the output of the following code snippet?\n public class Main {\n public static void main(String[] args) {\n int x = 5;\n System.out.println(++x == 6 && x == 6);\n } }",
        "options": [
            "true",
            "false",
            "6",
            "Compilation Error"
        ],
        "answer": "true",
        "description": "The pre-increment operator makes x become 6 before comparison; both conditions (x == 6) are true, so the overall result is true."
    },
    {
        "id": 16,
        "question": "What happens if you try to assign an int value to a byte variable without explicit casting?",
        "options": [
            "The assignment succeeds if the int value is within the byte range.",
            "A compile-time error occurs.",
            "The value is automatically truncated.",
            "The program runs but yields an unpredictable value."
        ],
        "answer": "A compile-time error occurs.",
        "description": "Assigning an int to a byte without casting causes a compile-time error, even if the value is within the byte range."
    },
    {
        "id": 17,
        "question": "What is the result of the following code?\n public class Main {\n public static void main(String[] args) {\n byte a = 10;\n byte b = 20;\n byte sum = (byte)(a + b);\n System.out.println(sum);\n } }",
        "options": [
            "30",
            "10",
            "Error",
            "50"
        ],
        "answer": "30",
        "description": "Adding two bytes results in an int; casting back to byte gives 30."
    },
    {
        "id": 18,
        "question": "Which of the following is NOT a valid identifier in Java?",
        "options": [
            "_myVar",
            "9num",
            "myVariable",
            "$value"
        ],
        "answer": "9num",
        "description": "Identifiers in Java cannot start with a digit; therefore, '9num' is not a valid identifier."
    },
    {
        "id": 19,
        "question": "Which of the following correctly represents the size of the 'short' primitive data type in Java?",
        "options": [
            "8 bits",
            "16 bits",
            "32 bits",
            "64 bits"
        ],
        "answer": "16 bits",
        "description": "In Java, the 'short' data type is 16 bits wide."
    },
    {
        "id": 20,
        "question": "What is the output of the following code?\n public class Main {\n public static void main(String[] args) {\n int x = 10;\n x += 5 * 2;\n System.out.println(x);\n } }",
        "options": [
            "20",
            "15",
            "10",
            "25"
        ],
        "answer": "20",
        "description": "The expression 5 * 2 evaluates to 10, and x += 10 updates x to 20."
    }, 
    [
  {
    "id": 1,
    "question": "Which of the following is a valid declaration of a variable in Java?",
    "options": ["a) int 1x = 10;", "b) int x = 10;", "c) float x = 10.0;", "d) Both b and c"],
    "answer": "d",
    "description": "Variable names cannot start with a digit. Both 'int x = 10;' and 'float x = 10.0;' are valid declarations."
  },
  {
    "id": 2,
    "question": "Which of the following statements is true about automatic type conversion in Java?",
    "options": [
      "a) Automatic type conversion is possible from int to long.",
      "b) Automatic type conversion is possible from long to int.",
      "c) Automatic type conversion is possible from double to float.",
      "d) Automatic type conversion is possible from char to boolean."
    ],
    "answer": "a",
    "description": "In Java, automatic type conversion (widening conversion) occurs when a smaller data type is assigned to a larger data type, such as int to long."
  },
  {
    "id": 3,
    "question": "What will be the output of the following code?\n\n```java\nint x = 10;\nint y = 4;\nint z = x / y;\nSystem.out.println(z);\n```",
    "options": ["a) 2", "b) 2.5", "c) 3", "d) 0"],
    "answer": "a",
    "description": "In Java, dividing two integers performs integer division, so 10 / 4 results in 2."
  },
  {
    "id": 4,
    "question": "Which of the following is a valid way to declare and initialize a char variable in Java?",
    "options": ["a) char c = 'a';", "b) char c = 97;", "c) char c = \"a\";", "d) Both a and b"],
    "answer": "d",
    "description": "In Java, a char can be initialized using a character literal (e.g., 'a') or its corresponding ASCII value (e.g., 97)."
  },
  {
    "id": 5,
    "question": "Which of the following operators is used to compare two values for equality in Java?",
    "options": ["a) =", "b) ==", "c) !=", "d) equals()"],
    "answer": "b",
    "description": "In Java, '==' is used to compare two values for equality."
  },
  {
    "id": 6,
    "question": "What will be the output of the following code?\n\n```java\nint a = 5;\nint b = 10;\nSystem.out.println(a > b ? a : b);\n```",
    "options": ["a) 5", "b) 10", "c) true", "d) false"],
    "answer": "b",
    "description": "The ternary operator evaluates 'a > b' as false, so it returns 'b', which is 10."
  },
  {
    "id": 7,
    "question": "Which of the following loops will execute at least once, regardless of the condition?",
    "options": ["a) for loop", "b) while loop", "c) do-while loop", "d) None of the above"],
    "answer": "c",
    "description": "A 'do-while' loop executes the loop body at least once before checking the condition."
  },
  {
    "id": 8,
    "question": "What will be the output of the following code?\n\n```java\nfor(int i = 0; i < 5; i++) {\n    if(i == 3) {\n        break;\n    }\n    System.out.print(i);\n}\n```",
    "options": ["a) 01234", "b) 012", "c) 123", "d) 0123"],
    "answer": "b",
    "description": "The loop prints '0', '1', and '2'. When 'i' equals '3', the 'break' statement terminates the loop."
  },
  {
    "id": 9,
    "question": "Which keyword is used to exit a loop in Java?",
    "options": ["a) exit", "b) break", "c) continue", "d) return"],
    "answer": "b",
    "description": "The 'break' keyword is used to exit the nearest loop or switch statement."
  },
  {
    "id": 10,
    "question": "What will be the output of the following code?\n\n```java\nint x = 5;\nwhile(x > 0) {\n    x--;\n}\nSystem.out.println(x);\n```",
    "options": ["a) 5", "b) 4", "c) 1", "d) 0"],
    "answer": "d",
    "description": "The while loop decrements 'x' until it is no longer greater than 0. The final value printed is 0."
  },
[
  {
    "id": 11,
    "question": "Which of the following is a valid variable name in Java?",
    "options": ["a) 1variable", "b) variable_1", "c) variable-1", "d) variable 1"],
    "answer": "b",
    "description": "In Java, variable names cannot start with a digit, contain hyphens, or spaces. 'variable_1' is a valid identifier."
  },
  {
    "id": 12,
    "question": "What is the default value of a boolean variable in Java?",
    "options": ["a) true", "b) false", "c) 0", "d) null"],
    "answer": "b",
    "description": "In Java, the default value of a boolean variable is 'false'."
  },
  {
    "id": 13,
    "question": "Which of the following data types has the highest range of values in Java?",
    "options": ["a) byte", "b) int", "c) long", "d) double"],
    "answer": "d",
    "description": "Among the given options, 'double' has the highest range as it is a double-precision 64-bit IEEE 754 floating point."
  },
  {
    "id": 14,
    "question": "What will be the output of the following code?\n\n```java\nint a = 5;\nint b = 10;\nint c = 15;\nif (a > b && a > c) {\n    System.out.println(a);\n} else if (b > a && b > c) {\n    System.out.println(b);\n} else {\n    System.out.println(c);\n}\n```",
    "options": ["a) 5", "b) 10", "c) 15", "d) Compilation error"],
    "answer": "c",
    "description": "The 'else' block executes because both previous conditions are false. Therefore, 'c' (which is 15) is printed."
  },
  {
    "id": 15,
    "question": "Which of the following statements is true about the 'switch' statement in Java?",
    "options": [
      "a) It can only evaluate 'int' data types.",
      "b) It can evaluate 'int', 'char', 'byte', 'short', 'enum', and 'String' data types.",
      "c) It can evaluate any data type.",
      "d) It cannot have a 'default' case."
    ],
    "answer": "b",
    "description": "The 'switch' statement in Java can evaluate 'int', 'char', 'byte', 'short', 'enum', and 'String' data types."
  },
  {
    "id": 16,
    "question": "What will be the output of the following code?\n\n```java\nint i = 0;\ndo {\n    System.out.print(i + \" \");\n    i++;\n} while (i < 3);\n```",
    "options": ["a) 0 1 2", "b) 0 1 2 3", "c) 1 2 3", "d) 1 2 3 4"],
    "answer": "a",
    "description": "The 'do-while' loop executes the block first and then checks the condition. It prints '0 1 2' before 'i' becomes 3 and the loop terminates."
  },
  {
    "id": 17,
    "question": "Which of the following is not a valid identifier for a variable in Java?",
    "options": ["a) myVariable", "b) 123variable", "c) _myVariable", "d) $variable"],
    "answer": "b",
    "description": "In Java, variable names cannot start with a digit. '123variable' is not a valid identifier."
  },
  {
    "id": 18,
    "question": "Which of the following can be operands of arithmetic operators?",
    "options": ["a) Numeric", "b) Boolean", "c) Characters", "d) Both Numeric & Characters"],
    "answer": "d",
    "description": "The operands of arithmetic operators can be either numeric or character types, but not boolean."
  },
  {
    "id": 19,
    "question": "What is true about a 'break' statement in Java?",
    "options": [
      "a) It stops the execution of the entire program.",
      "b) It halts the execution and forces the control out of the loop.",
      "c) It forces the control out of the loop and starts the execution of the next iteration.",
      "d) It halts the execution of the loop for a certain time frame."
    ],
    "answer": "b",
    "description": "The 'break' statement halts the execution and forces the control out of the loop."
  },
  {
    "id": 20,
    "question": "Which of the following is used with the 'switch' statement?",
    "options": ["a) continue", "b) exit", "c) break", "d) do"],
    "answer": "c",
    "description": "The 'break' statement is used with a 'switch' statement to shift control out of the 'switch' block."
  },

]

        


]



