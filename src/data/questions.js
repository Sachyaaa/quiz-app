export const questions = [
  {
    "id": 1,
    "question": "Given the declarations: int a = 5, b = 10; Which of the following correctly declares an int variable named `sum` and initializes it with the result of adding `a` and `b`?",
    "options": [
      "int sum = a + b;",
      "int sum = a add b;",
      "int sum = a, b;",
      "int sum = a +;"
    ],
    "answer": "A",
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
    "answer": "A",
    "description": "Option A shows the correct syntax for single-line (//) and multi-line (/* */) comments in Java."
  },
  {
    "id": 3,
    "question": "What is the output of the following code snippet? public class Main { public static void main(String[] args) { int a = 10, b = 5; System.out.println((a + b) * 2); } }",
    "options": [
      "30",
      "25",
      "20",
      "15"
    ],
    "answer": "A",
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
    "answer": "C",
    "description": "In Java, `String` is a class, not a primitive data type."
  },
  {
    "id": 5,
    "question": "What will be the output of the following code? public class Main { public static void main(String[] args) { boolean flag = (5 > 3); System.out.println(!flag); } }",
    "options": [
      "true",
      "false",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": "B",
    "description": "The expression (5 > 3) evaluates to true, so !flag is false."
  },
  {
    "id": 6,
    "question": "Given the code below, what is the output? public class Main { public static void main(String[] args) { int x = 5; System.out.println(x++ * 2); } }",
    "options": [
      "10",
      "12",
      "5",
      "11"
    ],
    "answer": "A",
    "description": "The post-increment operator returns the current value before incrementing, so 5 * 2 = 10."
  },
  {
    "id": 7,
    "question": "What is the output of the following code? public class Main { public static void main(String[] args) { char ch = 'A'; System.out.println((int) ch + 1); } }",
    "options": [
      "65",
      "66",
      "67",
      "64"
    ],
    "answer": "B",
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
    "answer": "D",
    "description": "Local variables in Java must be initialized before use; otherwise, it causes a compilation error."
  },
  {
    "id": 9,
    "question": "What is the output of the following code? public class Main { public static void main(String[] args) { double d = 9.99; int i = (int) d; System.out.println(i + 1); } }",
    "options": [
      "10",
      "9",
      "11",
      "10.99"
    ],
    "answer": "A",
    "description": "Casting 9.99 to int results in 9; adding 1 gives 10."
  },
  {
    "id": 10,
    "question": "What is the output of the following code snippet? public class Main { public static void main(String[] args) { int result = 17 % 5 + 2; System.out.println(result); } }",
    "options": [
      "4",
      "5",
      "2",
      "7"
    ],
    "answer": "A",
    "description": "17 % 5 equals 2; adding 2 results in 4."
  }
[
  {
    "id": 11,
    "question": "Which of the following commands correctly compiles a Java program named `Main.java` from the command line?",
    "options": [
      "java Main.java",
      "javac Main.java",
      "java Main",
      "compile Main.java"
    ],
    "answer": "B",
    "description": "The `javac` command compiles Java source files into bytecode."
  },
  {
    "id": 12,
    "question": "What will be the output of the following code? public class Main { public static void main(String[] args) { int x = 5; int y = x++ + ++x * 2; System.out.println(y); } }",
    "options": [
      "17",
      "19",
      "21",
      "23"
    ],
    "answer": "B",
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
    "answer": "A",
    "description": "Widening conversions are done automatically by Java, whereas narrowing conversions require explicit casting."
  },
  {
    "id": 14,
    "question": "What is the output of the following code? public class Main { public static void main(String[] args) { int a = 10, b = 15; System.out.println((a < b) && (a + 5 == b) || (a == b)); } }",
    "options": [
      "true",
      "false",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": "A",
    "description": "The expression (a < b) is true and (a + 5 == b) is true, so their AND is true; then true OR (a == b) remains true."
  },
  {
    "id": 15,
    "question": "What will be the output of the following code snippet? public class Main { public static void main(String[] args) { int x = 5; System.out.println(++x == 6 && x == 6); } }",
    "options": [
      "true",
      "false",
      "6",
      "Compilation Error"
    ],
    "answer": "A",
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
    "answer": "B",
    "description": "Assigning an int to a byte without casting causes a compile-time error, even if the value is within the byte range."
  },
  {
    "id": 17,
    "question": "What is the result of the following code? public class Main { public static void main(String[] args) { byte a = 10; byte b = 20; byte sum = (byte)(a + b); System.out.println(sum); } }",
    "options": [
      "30",
      "10",
      "Error",
      "50"
    ],
    "answer": "A",
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
    "answer": "B",
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
    "answer": "B",
    "description": "In Java, the 'short' data type is 16 bits wide."
  },
  {
    "id": 20,
    "question": "What is the output of the following code? public class Main { public static void main(String[] args) { int x = 10; x += 5 * 2; System.out.println(x); } }",
    "options": [
      "20",
      "15",
      "10",
      "25"
    ],
    "answer": "A",
    "description": "The expression 5 * 2 evaluates to 10, and x += 10 updates x to 20."
  }
]




