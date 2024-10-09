create table employee(
emp_no number(10),
e_name varchar(20),
e_address varchar(50),
e_ph_no number(10),
dept_no number(10),
dept_name char(20),
job_id char(10),
salary number(8)
);

desc employee;

select * from employee;

alter table employee add(hire_date date);

alter table employee modify job_id varchar(10);

alter table employee rename column emp_no to e_no;

alter table employee modify job_id varchar(20);

alter table employee add(primary key(e_no));

insert into employee values(
1,
'BOSS',
'HUBLI',
'123456789',
2,
'CSE',
'emp01',
90000,
'09-oct-2024');

insert into employee values(
14,
'kumari',
'dharwad',
'313547698',
3,
'ECE',
'emp05',
35000,
'10-apr-2021',
'kumari@gami.com');

select * from employee;

select * from employee where dept_no=3;

update employee set e_address = 'kalburgi' where e_no=12;

update employee set e_name = 'enemy' where e_no=12;

alter table employee add(email_id varchar(20));

update employee set email_id=null where name = 'kumar';

select * from employee where salary<=35000;

select * from employee where salary<>35000; 

select max(salary) from employee;

select count(*) from employee where e_name='king';

select avg(salary) from employee;

select sum(salary) from employee;

select min(salary) from employee;

select count(*) from employee where salary=35000;

select * from tab;

select * from employee; 

delete employee where e_no=13;

select e_no,e_address from employee;

select distinct e_address from employee;

select count(distinct e_address) from employee;

select distinct count(e_address) from employee;

select * from employee order by salary asc;

select * from employee order by salary desc;

select * from employee where salary between 20000 and 40000;

select * from employee where e_address in('kalburgi','dharwad');

select * from employee where e_address not in('HUBLI');

select * from employee where e_address like '%h%';

select * from employee where e_address like'_o_';

//% _ are called as wild cards
