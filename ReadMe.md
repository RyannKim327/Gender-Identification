# Gender Name Based Identification
#### MPOP Reverse II

### How to install
```Bash
npm install gender-identification
```

### How to set a name data
> .set(sample_name, [gender](#a))
```NodeJS
const gender = require("gender-identification")

gender.set("MyName", gender.MALE)
```
### Sample Output [Success]
```JSON
{
	"result": "New data added",
	"name": "MyName",
	"gender": "male"
}
```
### Sample Output [Error]
```JSON
{
	"result": "Invalid gender, kindly read the documentation or check the spelling of your input.",
	"name": "MyName",
	"gender": "null"
}
```
> The only name that recognized by this program is on the first name only like ("Ryann Kim") only Ryann will going to be added.
---
### How to get a name data
> .get(sample_name)
```NodeJS
const gender = require("gender-identification")

gender.set("MyName")
```
### Sample Output
```JSON
{
	"gender": "male",
	"id": 1
}
```
---
<label id="a"></label>

### Gender IDs
| Gender | ID |
| -- | -- |
| MALE | 1 |
| FEMALE | 0 |
| UNISEX | 2 |

> Be take note that this program didn't recognized the gender totally thru appearance, but thru names only, if there's a mistake in the program, it might be the registered data. To fix it, kindly overwrite the data you've inserted. Thank you for using this program, I hope it helps.

### Credits
* Lester Navarra
* John Paul Caigas
* Earl Shine Sawir
* Mart Anthony Salazar
* And Facebook Bot dev community