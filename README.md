CHAPTER ONE - REACT BASICS - PRACTICE EXERCISE 1:

Right now, the kennel location information is JSX inside the Kennel component. The business wants to expand and open a new location. Your job is to make a new component named LocationList, and put the names and addresses of each location in that component's JSX.

This is another example of Single Responsibility Principle. Since we have multiple locations now, we should have a component whose sole responsibility is to render the location information.

Create two locations (you can use separate section elements if you like): Nashville North with a fictitious address, and Nashville South with a fictitious address.

Then put the LocationList component in the JSX for Kennel.


CHAPTER TWO - STATE AND PROPS - EXERCISE ONE - Displaying Locations:

Update your application so that the array of locations is passed from the Kennel state to the props of LocationList. Then use the map() method to display all location names.

CHAPTER TWO - STATE AND PROPS - EXERCISE TWO - Displaying Animals
Now that you are passing state from the Kennel to the EmployeeList and LocationList, you're going to list animals now.

Create a new array in state in the Kennel component named animals. It will look just like the locations and employees arrays in state. Make sure each animal has an id property.
Create an AnimalList component for displaying animals.
Update Kennel to pass its animals state to AnimalList and use the appropriate key on this.props to display all animal names.

CHAPTER TWO - STATE AND PROPS - CHALLENGE: Animal Owners
Remember, challenges are completely optional and should not be attempted until you have done the practice exercises and understand the basic concepts of them.

Add the following owners property to the Kennel state.
ownersFromAPI = [
    { id: 1, name: "Ryan Tanay" },
    { id: 2, name: "Emma Beaton" },
    { id: 3, name: "Dani Adkins" },
    { id: 4, name: "Adam Oswalt" },
    { id: 5, name: "Fletcher Bangs" },
    { id: 6, name: "Angela Lee" }
]

state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
}
You create the intersection table and assign each animal to an owner.
Your task is to update the AnimalList component to also display the name of the animal's owner(s). Keep in mind that the animal may have more than one owner. You'll need to pass multiple collections - not just animals - to the component in order to accomplish this.


CHAPTER THREE - URL ROUTING - EXERCISE ONE - OWNER'S LIST

If you haven't created the owners array in your state yet, please go ahead and create it now, and populate it with 4 owners. Each owners should have the id, phoneNumber, and name properties.

Create a link in your navigation bar that links to /owners path.
Create a route for /owners that renders the <OwnerList> component and sends the corresponding state property.
Add the code in <OwnerList> to display all the items in the array.


PRACTICE CHAPTER FOUR - POPULATING REACT COMONENT STATE FROM AN API

Refactor your code to populate the locations and the owners from your API.

Once you have everything rendering, remove the empty arrays you defined in the state object so you can see how the React lifecycle works. What happened when you removed them?


CHAPTER 5 - PASSING FUNCTIONALITY AS PROPERTIES

PRACTICE: Fire Employees
Add the same functionality to the EmployeeList component so that employees can be fired!

PRACTICE: Remove Owners
Add the same functionality to the OwnerList for when they decide they no longer want to be a customer.


CHAPTER 6 - USING MODULES IN REACT

PRACTICE: All Resource Managers
Create a manager file in the modules directory for each of your resources.

Animals
Locations
Employees
Owners

Add the get() and all() methods to each one, changing the URL path in each one to get the corresponding resource type. Then refactor the ApplicationViews component to import all of them and use all of them when querying your data.


CHAPTER 7 - DYNAMIC ROUTING

PRACTICE: All the Details

implement dynamic routing for all of the other resources that you are displaying in your application.
