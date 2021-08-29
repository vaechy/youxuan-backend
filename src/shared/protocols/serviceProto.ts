import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './cms/PtlLogin';

export interface ServiceType {
    api: {
        "cms/Login": {
            req: ReqLogin,
            res: ResLogin
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 33,
    "services": [
        {
            "id": 0,
            "name": "cms/Login",
            "type": "api"
        }
    ],
    "types": {
        "cms/PtlLogin/ReqLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "cms/PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 34,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "msg",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "userInfo",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/User/default"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "access_token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        },
        "../interface/User/default": {
            "type": "Reference",
            "target": "../interface/User/User"
        },
        "../interface/User/User": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "username",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "email",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "mobile",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "avatar",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "condition",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "create_time",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "update_time",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Date"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": null
                                }
                            }
                        ]
                    },
                    "optional": true
                }
            ]
        }
    }
};