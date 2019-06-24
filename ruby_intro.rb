# ----------------INTRO TO RUBY 6/24/2019

# Ruby was created by Yukihiro Matsumoto (more affectionately known as Matz) in Japan starting in 1993. Matz essentially kept Ruby to himself until 1995 when he released it to the public. It gained popularity with the release of Ruby on Rails in 2004/5.

# MINASWAN - Matz is nice and so we are nice

# Object-oriented - an object is an instance of a class, the class defines the properties and behavior of an object
# Implicit - complied at execution just like JS, source code has to be complied at execution so is slower and you can see the source code
# Dynamically typed - change the datatype if you reassign a variable
# Scripting language - a non-compiled language designed for integrating and interacting with other programming languages

# The goal of ruby was a programming language that feels natural for humans to read

# Commenting uses a #

# How to run ruby files:
# - Save the file with the extension .rb
# - In terminal (for Mac) ruby file_name.rb
# - Run irb, to return to terminal type exit
# - The basic AWS environment (ubuntu) will run irb and ruby file_name.rb


# OUTPUT
# puts (puts string) - adds a new line after executing (similar to return in JS)
# print - doesn’t add a new line
# p - returns the exact input (similar to console.log in JS)

puts 'Enter Your Name'
print 'Enter Your Name'
p 'Enter Your Name'


# DATATYPES - everything is an object/class including individual datatypes

# Intergers - the basic math functions are just like JS, but doesn’t return decimals on division of whole numbers
#If you want a float to be returned, you must start with a float for at least one piece of the operation

p 5/2
p 5.0/2
p 5/2.0
p 22/7.0
p 0/3.0

# p 3/0 ---> will throw an error
# p 0.0/0 ---> will return NaN
# p 3.0/0 ---> will return Infinity


# Boolean - comparison == (no type coersion, the only objects that evluates to falsely are nil and false, everything else is thruthy)

p 7 == 7
p 7 == '7'

# Strings - Single quotes for most uses, except string interpolation "#{}"

# Arrays - look the same as JS


# METHODS - everything in ruby is an object, therefore an instance of an instance of a class, every action is a method, (a function that belongs to a class)
# Implicit return - ruby will return every method without the word return, but you can still use return if you want

# String Methods, using dot notation, methods can be chained

p 'charlie'.capitalize
p 'CHARLIE'.downcase
p 'charlie'.reverse
p 'Charlie ' * 3
p 'charlie'.upcase.reverse



# VARIABLES - Ruby uses snake_casing
my_var = 'hello'
num = 5793
my_num = '4920'

p MYCONST = 'hi'
p MYCONST = 'hello'

# parallel assignment
x, y, z = 1, 2, 3
p x, y, z

# To check the datatype of a variable use the method .class

p my_var.class
p num.class
p my_num.class

# Change the datatype .to_s (to string) and .to_i (to interger)

p num.to_s
p my_num.to_i

# num.to_s(a number 2-36) will change to a base number, 2=bianary, 16=hexadecimal

p num.to_s(2).to_i
p 479453.to_s(16)

# Array Methods
# Most methods won’t permanently change the variable, add a ! after the method to make it a mutator

nums = [3, 15, 17, 4, 10, 5]

p nums.length
p nums.first
p nums.last
p nums.include?3
p nums

p nums.reverse
p nums
p nums.reverse!
p nums

p nums[2]
p nums[6]
p nums[88]
p nums[2] = 100
p nums


# Mutator methods/operators:

# Shovel operator <<

p [1, 2, 3] << 99
p nums << 99
p nums
p [] << 'hello'

p nums[88] = 16
p nums
p nums.length

p nums.pop
p nums


#INPUT - getting user input in terminal/irb
p 'Enter Your Name'
p your_name = gets.chomp
p "Hey #{your_name.upcase}. How's life?"


# CONDITIONALS - IF/ELSE/END

p 'Enter your Age'
your_age = gets.chomp.to_i
p your_age.class

if your_age >= 21
  p "#{your_age} is old enough to drink."
else
  p "#{your_age} is not old enought to drink"
end


# METHODS WITH PARAMETERS - DEF/END (Ruby keywords)

def mult num1, num2
  num1 * num2
end
p mult 3, 7


# It is best practice to use parentheses on methods that pass multiple parameters

def mult(num1, num2)
  num1 * num2
end
p mult(3, 7)



p 'Enter Your Name'
your_name = gets.chomp
p 'Enter your Age'
your_age = gets.chomp.to_i


def drinking_age(name, age)
  if age >= 21
    "Hi #{name}! #{age} is old enough to drink"
  else
    "Hi #{name}! #{age} is not old enought to drink"
  end
end
p drinking_age(your_name, your_age)


# IF/ELSIF/ELSE/END

p "Enter number"
number1 = gets.chomp
p "Enter another number"
number2 = gets.chomp

def greater(num1, num2)
  if num1 > num2
    "#{num1} is greater"
  elsif num1 < num2
    "#{num2} is greater"
  else
    "#{num1} and #{num2} are equal"
  end
end
p greater(number1, number2)


# UNLESS - part of the conditional family, comes from the intuitive language aspect of Ruby
# Easy to read but not super practical or much used

check_num = 7

unless check_num > 5
  p 'this'
else
  p 'that'
end


#-------------Stop here for Intro Challenges


# HASHES - key: value pairs in Ruby, much like JS objects
# The => is called a rocket

lunch_order = { tacos: 10, type: "Carnitas" }

# Access the value by the hash

p lunch_order[:tacos]


# A Hash can also be created with Hash.new

burger_order = Hash.new
burger_order['Double Cheese Burger'] = 10
p burger_order

name = Hash.new
name['Learn Student'] = 'Matz'
p name



# LOOPS - DO/END

5.times do
  p 'times loop'
end


loop_num = 10

loop_num.times do
  p 'hello'
end


i = 0

while i <= 5 do
  p i
  i+= 1
end


a = [3, 4, 17]

a.each do |element|
  p element * 3
end


# MAP - the curly braces take the place of the DO/END block

ex_array = [8, 9, 15, 3, 12, 13]

p ex_array.map{ |i| i * 3}



def mult_number(arr)
  p mult3 = arr.map{ |el| el * 3}
end
mult_number(ex_array)



arr1 = ["Louise", "Gene", "Tina"]

def add_name(arr)
  arr.map{|element| "#{element} Belcher"}
end
p add_name(arr1)



new_nums = [8, 9, 15, 3, 12, 13]

def odd_even(arr)
  arr.map { |el|
    if el % 2 == 0
      "even"
    else
      "odd"
    end
  }
end
p odd_even(new_nums)



# map is not a mutator
p new_nums

# use the ! to save changes
def odd_even(arr)
  arr.map! { |el|
    if el % 2 == 0
      "even"
    else
      "odd"
    end
  }
end
p odd_even(new_nums)
p new_nums






# -------------------EXTRA EXAMPLES

# Write a method that takes in an array and returns only the odd numbers
# The .select method will evaluate to a boolean value

nums = [8, 9, 15, 3, 12, 13]
# expected output = [9, 15, 3, 13]

def odd_only(arr)
  arr.select{|el| el % 2 != 0}
end
p odd_only(nums)




# Write a method that capitalizes the first letter of each word in a sentence

my_sentence = 'hello there, how are you?'
# expected output = "Hello There, How Are You?"

def cap_first(sentence)
  sentence.split(" ").map{|el| el.capitalize}.join(" ")
end
p cap_first(my_sentence)




# Write a method that removes the vowels from a sentence

no_vowels = "I have no vowels"
# expected output = " hv n vwls"

def remove_vowel(sentence)
  sentence.delete('aeiou')
end
p remove_vowel(no_vowels)
















# class Animal
#     def initialize color
#         @color = color
#     end
#     def legs
#         4
#     end
# end
# yo = Animal.new("Brown")
# p yo.legs


# def hacker_speak(str)
# 	arr = str.split("")
# 	blank = arr.map { |el|
# 		if el == "a"
# 			4
# 		elsif el == "e"
# 			3
#       elsif el == "i"
#       1
# 		elsif el == "o"
# 			0
# 		elsif el == "s"
# 			5
#     else
#       el
# 		end
# 	}
#   final = blank.join("")
# end
#
# # In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
#
#
# # H4ck3r Sp34k
# # Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
#
# # Examples
# # hacker_speak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
#
# # hacker_speak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
#
# # hacker_speak("become a coder") ➞ "b3c0m3 4 c0d3r"
# # Notes
# # In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
#
