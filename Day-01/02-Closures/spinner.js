create an object and assign it to a variable "spinner"
the object is expected to exhibit the following methods

var spinner = {
    name : 'spinner'
}

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

note : the variable that is used to track the value should be private
