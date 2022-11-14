const _0x0 = require("fs")

const MALE = "0x1"
const FEMALE = "0x0"
const UNISEX = "-0x1"

let _2x0 = (_0x0) => {
	let _0x1 = ""
	for(let _0x2 = 0; _0x2 < _0x0.length; _0x2++){
		_0x1 += _0x0.toLowerCase().charCodeAt(_0x2).toString(19)
	}
	return _0x1
}

let get = (_1x0) => {
	let _1x1 = JSON.parse(_0x0.readFileSync(`${__dirname}/_0x0/_0x0.json`, "utf8"))
	let _1x2 = _1x0.toLowerCase().split(" ")
	if(_1x1[_2x0(_1x2[0])] == undefined){
		if(_1x1[_2x0(_1x2[1])] == undefined){
			return {
				gender: "unisex",
				id: 2
			}
		}else{
			if(_1x1[_2x0(_1x2[1])] == MALE){
				return {
					gender: "male",
					id: 1
				}
			}else if(_1x1[_2x0(_1x2[1])] == FEMALE){
				return {
					gender: "female",
					id: 0
				}
			}else{
				return {
					gender: "unisex",
					id: 2
				}
			}
		}
	}else{
		if(_1x1[_2x0(_1x2[0])] == MALE){
			return {
				gender: "male",
				id: 1
			}
		}else if(_1x1[_2x0(_1x2[0])] == FEMALE){
			return {
				gender: "female",
				id: 0
			}
		}else{
			return {
				gender: "unisex",
				id: 2
			}
		}
	}
}

let set = (_1x0, _1x1) => {
	let _1x2 = JSON.parse(_0x0.readFileSync(`${__dirname}/_0x0/_0x0.json`, "utf8"))
	if(_1x1 == MALE || _1x1 == FEMALE || _1x1 == UNISEX){
		let _1x3 = _1x0.split(" ")
		_1x2[_2x0(_1x3[0])] = _1x1
		_0x0.writeFileSync(`${__dirname}/_0x0/_0x0.json`, JSON.stringify(_1x2), "utf8")
		let _1x4 = (_2x0) => {
			if(_2x0 == MALE)
				return "male"
			else if(_2x0 == FEMALE)
				return "female"
			else
				return "unisex"
		}
		return {
			result: "New data added",
			name: _1x0,
			gender: _1x4(_1x1)
		}
	}else{
		return {
			result: "Invalid gender, kindly read the documentation or check the spelling of your input.",
			name: _1x1,
			gender: "null"
		}
	}
}

module.exports = {
	MALE,
	FEMALE,
	UNISEX,
	get,
	set
}