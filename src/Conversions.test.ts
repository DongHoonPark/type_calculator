import rewire from "rewire"
const Conversions = rewire("./Conversions")
const is_unsigned_fixed = Conversions.__get__("is_unsigned_fixed")
const is_fixed = Conversions.__get__("is_fixed")
// @ponicode
describe("is_unsigned_fixed", () => {
    test("0", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("STRING")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("string")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("striNg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("stRIng")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            is_unsigned_fixed("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("is_fixed", () => {
    test("0", () => {
        let callFunction: any = () => {
            is_fixed("number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            is_fixed("string")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            is_fixed("object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            is_fixed("array")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            is_fixed("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.isNumber", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.isNumber("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.isNumber("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.isNumber("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.isNumber("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.isNumber("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.isNumber("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.get_type_bitlens", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("FLOAT64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("FloAt64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("float64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("FLOAt64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("float32")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.get_type_bitlens("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.hex2bits", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("0xA", "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("0xb", "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("0x3", "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("0x9", "object")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("0x9", "number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.hex2bits("", "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.bits2hex", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([56, 16, 64, 8, 48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([48, 64, 40, 40, 48])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([16])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([56, 32, 8, 56, 16])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([32, 16, 24])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.bits2hex([])
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.hex2val", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.hex2val("0x3", "float32")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.hex2val("0xA", "string")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.hex2val("0x9", "float32")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.hex2val("0xA", "float64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.hex2val("0xA", "number")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.hex2val("", "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("Conversions.val2hex", () => {
    test("0", () => {
        let callFunction: any = () => {
            Conversions.val2hex(241, "float64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Conversions.val2hex(161, "float64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Conversions.val2hex(159, "float32")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Conversions.val2hex(243, "float64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            Conversions.val2hex(243, "float32")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Conversions.val2hex(Infinity, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})
