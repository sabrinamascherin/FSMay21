-- INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('Emmanuel', 'Onu', 56, 'male', 3.8, 1);
-- INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('Jennifer', 'Lopez', 20, 'female', 3.6, 1);
-- INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('Ben', 'Davies', 15, 'male', 2.0, 2);
-- INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('Rose', 'Benneth', 28, 'female', 4.0, 4);
-- INSERT INTO students (first_name, last_name, age, gender, gpa, department_id) VALUES ('Rocky', 'Li', 23, 'male', 3.9, 3);

-- SELECT * FROM students
-- SELECT first_name, gender, gpa FROM students
-- SELECT * FROM students WHERE gender = 'male' OR age < 29 ORDER BY gpa DESC LIMIT 3
-- SELECT count(*), gender FROM students WHERE gender = 'male' GROUP BY gender;
-- SELECT count(*), department_id FROM students GROUP BY department_id;
-- SELECT MAX(age) from students
-- SELECT * FROM students JOIN departments ON students.department_id = departments.id
SELECT students.*, departments.title from students JOIN departments ON students.department_id = departments.id
-- UPDATE students SET gender = 'female'WHERE id = 3

-- DELETE FROM students WHERE id = 2