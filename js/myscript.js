const URL="https://covid19.mathdro.id/api";

let app=angular.module('MyApp',[]);
app.controller("MyCtrl",($scope, $http)=>{


    $scope.title="Corona Virus Tracker";


    console.log("App loaded");

    $scope.change= () =>
    {
        $scope.title="Stay Home Stay Safe"; 
    }
    $scope.leave= () =>
    {
        $scope.title="Corona Virus Tracker"; 
    }
    
    
    $http.get(URL).then((response)=>{
        console.log(response.data);

        $scope.alldata=response.data;
    },(error)=>{
        console.log(error.data); 
    });

//get country data
$scope.getdata= ()=>
{
let country=$scope.c;
console.log(country);
$scope.count=country;
if(country =="")
{
    return;
}

$http.get(`${URL}/countries/${country}` ).then(
 (response)=>{
console.log(response.data);
$scope.cdata=response.data;
}, (error) =>{
    console.log(error);
})
};
});