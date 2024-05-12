"use strict";
function make_shirt(size = "large", message = "i love typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt();
make_shirt("medium", "code never lies,comments some time do");
function describe_city(name = "karachi", country = "pakistan") {
    console.log(`${name} located in ${country}`);
}
describe_city();
describe_city("lahore");
describe_city("Islamabad");
describe_city("Dehli", "India");
function city_country(city, country) {
    return city + ", " + country;
}
console.log(city_country("karachi", "pakistan"));
console.log(city_country("Mumbai", "India"));
console.log(city_country("Washington", "America"));
console.log(city_country("Paris", "New York"));
