import { ServiceProto } from 'tsrpc-proto';
import { ReqLogin, ResLogin } from './cms/PtlLogin';
import { ReqAddData, ResAddData } from './PtlAddData';
import { ReqGetData, ResGetData } from './PtlGetData';

export interface ServiceType {
    api: {
        "cms/Login": {
            req: ReqLogin,
            res: ResLogin
        },
        "AddData": {
            req: ReqAddData,
            res: ResAddData
        },
        "GetData": {
            req: ReqGetData,
            res: ResGetData
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 3,
    "services": [
        {
            "id": 0,
            "name": "cms/Login",
            "type": "api"
        },
        {
            "id": 1,
            "name": "AddData",
            "type": "api"
        },
        {
            "id": 2,
            "name": "GetData",
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
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "avatar",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "mobile",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 6,
                    "name": "group_id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "is_del",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "create_time",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 9,
                    "name": "update_time",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ReqAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddData/ResAddData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetData/ReqGetData": {
            "type": "Interface"
        },
        "PtlGetData/ResGetData": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "content",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "time",
                                    "type": {
                                        "type": "Date"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
};