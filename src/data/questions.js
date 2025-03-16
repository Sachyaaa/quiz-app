export const questions = {
  "Test_1": [
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
  ],
  "Test_2": [
    [
  {
    "id": 1,
    "question": "What is the range of the 'short' data type in Java?",
    "options": [
      "-128 to 127",
      "-32768 to 32767",
      "0 to 65535",
      "-2147483648 to 2147483647"
    ],
    "answer": "-32768 to 32767",
    "description": "The 'short' data type in Java is a 16-bit signed integer, with a range from -32,768 to 32,767."
  },
  {
    "id": 2,
    "question": "Which of these can be returned by the operator '&' in Java?",
    "options": [
      "Integer",
      "Boolean",
      "Character",
      "Integer or Boolean"
    ],
    "answer": "Integer or Boolean",
    "description": "The '&' operator can be used on integers/chars (returning an integer) or on booleans (returning a boolean)."
  },
  {
    "id": 3,
    "question": "What is the default value of an instance variable of type 'boolean' in Java?",
    "options": [
      "true",
      "false",
      "0",
      "null"
    ],
    "answer": "false",
    "description": "Instance variables of type 'boolean' have a default value of 'false' in Java."
  },
  {
    "id": 4,
    "question": "What will be the output of the following code?\n\n```java\nint x = 5;\nSystem.out.println(++x * 8);\n```",
    "options": [
      "40",
      "48",
      "32",
      "42"
    ],
    "answer": "48",
    "description": "The '++x' is a pre-increment operation; it increments 'x' to 6 before multiplication."
  },
  {
    "id": 5,
    "question": "Which of the following is not a valid way to declare a variable in Java?",
    "options": [
      "int x = 10;",
      "float y = 20.0;",
      "boolean z = true;",
      "char a = 'ab';"
    ],
    "answer": "char a = 'ab';",
    "description": "The 'char' data type can hold only a single character enclosed in single quotes."
  },
  {
    "id": 6,
    "question": "What is the result of the expression '10 / 3' in Java when both operands are integers?",
    "options": [
      "3.3333",
      "3",
      "3.0",
      "Compilation error"
    ],
    "answer": "3",
    "description": "In integer division, the result is the quotient without the remainder."
  },
  {
    "id": 7,
    "question": "Which of the following is a valid multi-line comment in Java?",
    "options": [
      "// This is a\n// multi-line comment",
      "/* This is a\nmulti-line comment */",
      "/* This is a\nmulti-line comment",
      "// This is a\nmulti-line comment */"
    ],
    "answer": "/* This is a\nmulti-line comment */",
    "description": "Multi-line comments in Java are enclosed within '/*' and '*/'."
  },
  {
    "id": 8,
    "question": "What will be the output of the following code?\n\n```java\nint a = 5;\ndouble b = 2.0;\ndouble c = a / b;\nSystem.out.println(c);\n```",
    "options": [
      "2.5",
      "2.0",
      "2",
      "Compilation error"
    ],
    "answer": "2.5",
    "description": "The division of an 'int' by a 'double' results in a 'double' with decimal precision."
  },
  {
    "id": 9,
    "question": "Which of these data types can store whole numbers in Java?",
    "options": [
      "float",
      "int",
      "boolean",
      "char"
    ],
    "answer": "int",
    "description": "The 'int' data type is used to store whole numbers in Java."
  },
  {
    "id": 10,
    "question": "Which data type is used to store a single character in Java?",
    "options": [
      "char",
      "String",
      "letter",
      "ch"
    ],
    "answer": "char",
    "description": "In Java, the 'char' data type is used to store a single 16-bit Unicode character."
  },
  [
  {
    "id": 11,
    "question": "What will be the output of the following code?\n\n```java\nint x = 5;\nif (x > 0) {\n    System.out.println(\"Positive\");\n} else {\n    System.out.println(\"Non-positive\");\n}\n```",
    "options": [
      "Positive",
      "Non-positive",
      "0",
      "Compilation error"
    ],
    "answer": "Positive",
    "description": "Since x is 5, which is greater than 0, the condition 'x > 0' evaluates to true, and 'Positive' is printed."
  },
  {
    "id": 12,
    "question": "Which loop is guaranteed to execute at least once?",
    "options": [
      "for loop",
      "while loop",
      "do-while loop",
      "None of the above"
    ],
    "answer": "do-while loop",
    "description": "A 'do-while' loop checks its condition after executing the loop's body, ensuring it runs at least once."
  },
  {
    "id": 13,
    "question": "What is the output of the following code?\n\n```java\nfor (int i = 0; i < 3; i++) {\n    System.out.print(i + \" \");\n}\n```",
    "options": [
      "0 1 2 ",
      "1 2 3 ",
      "0 1 2 3 ",
      "0 1 2 3 4 "
    ],
    "answer": "0 1 2 ",
    "description": "The loop starts with i=0 and increments i until it reaches 3, printing '0 1 2 '."
  },
  {
    "id": 14,
    "question": "Which statement is used to terminate a loop prematurely in Java?",
    "options": [
      "continue",
      "break",
      "exit",
      "return"
    ],
    "answer": "break",
    "description": "The 'break' statement terminates the nearest enclosing loop, transferring control to the statement immediately following the loop."
  },
  {
    "id": 15,
    "question": "What will be the output of the following code?\n\n```java\nint i = 0;\nwhile (i < 3) {\n    i++;\n}\nSystem.out.println(i);\n```",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "3",
    "description": "The 'while' loop increments i from 0 to 3, so after the loop, i equals 3."
  },
  {
    "id": 16,
    "question": "Which keyword is used to skip the current iteration of a loop and proceed to the next one?",
    "options": [
      "break",
      "skip",
      "continue",
      "pass"
    ],
    "answer": "continue",
    "description": "The 'continue' statement skips the rest of the current loop iteration and proceeds with the next iteration."
  },
  {
    "id": 17,
    "question": "What will be the output of the following code?\n\n```java\nfor (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        break;\n    }\n    System.out.print(i + \" \");\n}\n```",
    "options": [
      "0 1 2 ",
      "0 1 2 3 ",
      "0 1 2 3 4 ",
      "0 1 2 4 "
    ],
    "answer": "0 1 2 ",
    "description": "The loop prints '0 1 2 ' and then encounters 'i == 3', triggering the 'break' statement to exit the loop."
  },
  {
    "id": 18,
    "question": "Which of the following is the correct syntax for a 'for' loop in Java?",
    "options": [
      "for (int i = 0; i < 10; i++)",
      "for (i = 0; i < 10; i++)",
      "for (int i = 0; i < 10; i--)",
      "for (int i = 0; i < 10)"
    ],
    "answer": "for (int i = 0; i < 10; i++)",
    "description": "The correct syntax includes initialization, condition, and increment/decrement expressions: 'for (int i = 0; i < 10; i++)'."
  },
  {
    "id": 19,
    "question": "What is the purpose of the 'default' case in a 'switch' statement?",
    "options": [
      "To execute code when no 'case' matches",
      "To define the first case",
      "To terminate the 'switch' statement",
      "To repeat the 'switch' statement"
    ],
    "answer": "To execute code when no 'case' matches",
    "description": "The 'default' case in a 'switch' statement executes when none of the specified 'case' values match the switch expression."
  },
  {
    "id": 20,
    "question": "What will be the output of the following code?\n\n```java\nint i = 0;\ndo {\n    System.out.print(i + \" \");\n    i++;\n} while (i < 3);\n```",
    "options": [
      "0 1 2 ",
      "1 2 3 ",
      "0 1 2 3 ",
      "0 1 2 3 4 "
    ],
    "answer": "0 1 2 ",
    "description": "The 'do-while' loop executes the body first and then checks the condition. It prints '0 1 2 ' before the condition 'i < 3' becomes false."
  },
[
  {
    "id": 21,
    "question": "What does the following code print?\n\n```java\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 2; j++) {\n        System.out.print(i + \"-\" + j + \" \");\n    }\n}\n```",
    "options": [
      "1-1 1-2 2-1 2-2 3-1 3-2 ",
      "1-1 2-1 3-1 1-2 2-2 3-2 ",
      "1-1 1-2 1-3 2-1 2-2 2-3 ",
      "1-1 2-1 3-1 1-2 2-2 3-2 1-3 2-3 3-3 "
    ],
    "answer": "1-1 1-2 2-1 2-2 3-1 3-2 ",
    "description": "The outer loop runs from 1 to 3, and for each iteration, the inner loop runs from 1 to 2, printing the current values of 'i' and 'j'."
  },
  {
    "id": 22,
    "question": "How many times will the innermost statement execute in the following nested loops?\n\n```java\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 5; j++) {\n        for (int k = 0; k < 6; k++) {\n            // Innermost statement\n        }\n    }\n}\n```",
    "options": [
      "15",
      "60",
      "120",
      "30"
    ],
    "answer": "120",
    "description": "The innermost statement executes 4 (i loop) × 5 (j loop) × 6 (k loop) = 120 times."
  },
  {
    "id": 23,
    "question": "What pattern does the following code produce?\n\n```java\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}\n```",
    "options": [
      "*\n**\n***",
      "***\n**\n*",
      "  *\n **\n***",
      "***\n **\n  *"
    ],
    "answer": "*\n**\n***",
    "description": "The outer loop controls the rows, and the inner loop prints '*' characters equal to the current row number."
  },
  {
    "id": 24,
    "question": "In a nested loop structure, which loop completes all its iterations for each single iteration of the other loop?",
    "options": [
      "The outer loop",
      "The inner loop",
      "Both loops simultaneously",
      "Neither loop"
    ],
    "answer": "The inner loop",
    "description": "In nested loops, the inner loop completes all its iterations for each iteration of the outer loop."
  },
  {
    "id": 25,
    "question": "What is the output of the following code?\n\n```java\nfor (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print((i + j) + \" \");\n    }\n}\n```",
    "options": [
      "2 3 4 3 4 5 ",
      "3 4 5 4 5 6 ",
      "2 4 6 3 5 7 ",
      "1 2 3 2 3 4 "
    ],
    "answer": "2 3 4 3 4 5 ",
    "description": "The expression '(i + j)' calculates the sum of 'i' and 'j' for each iteration of the inner loop."
  },
  {
    "id": 26,
    "question": "How many times will 'Hello' be printed?\n\n```java\nfor (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.println(\"Hello\");\n    }\n}\n```",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "answer": "6",
    "description": "The outer loop runs 3 times, and the inner loop runs 2 times for each outer loop iteration, resulting in 3 × 2 = 6 prints."
  },
  {
    "id": 27,
    "question": "What will be the output of the following code?\n\n```java\nfor (int i = 1; i <= 2; i++) {\n    for (int j = 1; j <= 2; j++) {\n        if (i == j) {\n            System.out.print(i + \" \");\n        }\n    }\n}\n```",
    "options": [
      "1 2 ",
      "1 1 2 2 ",
      "1 2 1 2 ",
      "1 2 2 1 "
    ],
    "answer": "1 2 ",
    "description": "The condition 'i == j' is true when both 'i' and 'j' are equal, resulting in the output '1 2 '."
  },
  {
    "id": 28,
    "question": "Which of the following best describes a nested loop?",
    "options": [
      "A loop that runs indefinitely",
      "A loop inside another loop",
      "Two loops that run sequentially",
      "A loop with multiple conditions"
    ],
    "answer": "A loop inside another loop",
    "description": "A nested loop is a loop that exists within another loop."
  },
  [
  {
    "id": 29,
    "question": "What is the output of the following code?\n\n```java\nfor (int i = 1; i <= 3; i++) {\n    for (int j = 3; j >= 1; j--) {\n        if (i == j) {\n            System.out.print(i + \" \");\n        }\n    }\n}\n```",
    "options": [
      "1 2 3 ",
      "3 2 1 ",
      "1 1 2 2 3 3 ",
      "3 2 1 1 2 3 "
    ],
    "answer": "1 2 3 ",
    "description": "The outer loop runs with 'i' from 1 to 3. The inner loop runs with 'j' from 3 to 1. The condition 'if (i == j)' is true when both 'i' and 'j' are equal. Therefore, the output is '1 2 3 '."
  },
  {
    "id": 30,
    "question": "How many times will the innermost statement execute in the following nested loops?\n\n```java\nfor (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 3; j++) {\n        for (int k = 0; k < 2; k++) {\n            // Innermost statement\n        }\n    }\n}\n```",
    "options": [
      "12",
      "18",
      "24",
      "30"
    ],
    "answer": "24",
    "description": "The innermost statement executes 4 (iterations of 'i') × 3 (iterations of 'j') × 2 (iterations of 'k') = 24 times."
  }
]

]

    



}



