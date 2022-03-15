console.log("loaded file : 2.js")

const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

    const user = 
        {
            name:'Vikram',
            scores:98,
            skills:['NODEJS', 'REACTJS', 'EXPRESSJS'],
            age:26
        };

    function UsersScoresGreaterThan85(users) {
        let newArr = [];
        for (let i = 0; i < users.length; i++){
            if (users[i].scores > 85) {
                newArr.push(users[i].name)
            }
        }
        console.log("UsersScoresGreaterThan85 : ", newArr);
        return newArr;
    }
    
    //add user if does not exist
    function addUser(users, user) {
        let userExists = false;
        for (let i = 0; i < users.length; i++) { 
            if(users[i].name==user){
                console.log("user exist");
                userExists = true;
            }
        }
        if (!userExists) {
            users.push(user);
            console.log("user added");
            console.log(users);
        }
    
    }
    
    function addUserSkill(users, skill, username) {
        for (let i = 0; i < users.length; i++) { 
            if(users[i].name==username){
                users[i].skills.push(skill)
            }
        }
        console.log(users);
        return users
    }
    
    function editUser(users, name, newname) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name == name) {
                users[i].name = newname;
            }
        }
        console.log(users);
        return users;
    }

