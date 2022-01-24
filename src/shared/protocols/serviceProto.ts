import { ServiceProto } from 'tsrpc-proto';
import { ReqAddCmsUser, ResAddCmsUser } from './PtlAddCmsUser';
import { ReqCmsUserList, ResCmsUserList } from './PtlCmsUserList';
import { ReqLogin, ResLogin } from './PtlLogin';

export interface ServiceType {
    api: {
        "AddCmsUser": {
            req: ReqAddCmsUser,
            res: ResAddCmsUser
        },
        "CmsUserList": {
            req: ReqCmsUserList,
            res: ResCmsUserList
        },
        "Login": {
            req: ReqLogin,
            res: ResLogin
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 0,
            "name": "AddCmsUser",
            "type": "api"
        },
        {
            "id": 1,
            "name": "CmsUserList",
            "type": "api"
        },
        {
            "id": 2,
            "name": "Login",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddCmsUser/ReqAddCmsUser": {
            "type": "Interface"
        },
        "PtlAddCmsUser/ResAddCmsUser": {
            "type": "Interface"
        },
        "PtlCmsUserList/ReqCmsUserList": {
            "type": "Interface"
        },
        "PtlCmsUserList/ResCmsUserList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../interface/index/IUser"
                        }
                    },
                    "optional": true
                }
            ]
        },
        "../interface/index/IUser": {
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
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "email",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "mobile",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "desc",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "conditions",
                    "type": {
                        "type": "Number"
                    },
                    "optional": true
                }
            ]
        },
        "PtlLogin/ReqLogin": {
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
        "PtlLogin/ResLogin": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "message",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "token",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                }
            ]
        }
    }
};