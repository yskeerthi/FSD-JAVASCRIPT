var data={

}
function firstname(event){
    data.firstname=event.target.value;
}

function lastname(event){
    data.lastname=event.target.value;
}

function Age(event){
    data.Age=event.target.value;
}

function DOB(event){
    data.DOB=event.target.value;
}

function phonenumber(event){
    data.phonenumber=event.target.value;
}

function fathername(event){
    data.fathername=event.target.value;
}

function mothername(event){
    data.mothername=event.target.value;
}

function address(event){
    data.address=event.target.value;;
}
function radio1(event){
    data.radio1=event.target.value;
}
function radio2(event){
    data.radio2=event.target.value;
}

function certifications(event){
    data.certifications=event.target.value;
}
function Submit(e){
    console.log(data)
    e.preventDefault();
}
// function C(event){
//     data.C(event)
// }