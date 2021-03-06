/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/pet": {
    /** Update an existing pet by Id */
    put: operations["updatePet"];
    /** Add a new pet to the store */
    post: operations["addPet"];
  };
  "/pet/findByStatus": {
    /** Multiple status values can be provided with comma separated strings */
    get: operations["findPetsByStatus"];
  };
  "/pet/findByTags": {
    /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
    get: operations["findPetsByTags"];
  };
  "/pet/{petId}": {
    /** Returns a single pet */
    get: operations["getPetById"];
    post: operations["updatePetWithForm"];
    delete: operations["deletePet"];
  };
  "/pet/{petId}/uploadImage": {
    post: operations["uploadFile"];
  };
  "/store/inventory": {
    /** Returns a map of status codes to quantities */
    get: operations["getInventory"];
  };
  "/store/order": {
    /** Place a new order in the store */
    post: operations["placeOrder"];
  };
  "/store/order/{orderId}": {
    /** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions */
    get: operations["getOrderById"];
    /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors */
    delete: operations["deleteOrder"];
  };
  "/user": {
    /** This can only be done by the logged in user. */
    post: operations["createUser"];
  };
  "/user/createWithList": {
    /** Creates list of users with given input array */
    post: operations["createUsersWithListInput"];
  };
  "/user/login": {
    get: operations["loginUser"];
  };
  "/user/logout": {
    get: operations["logoutUser"];
  };
  "/user/{username}": {
    get: operations["getUserByName"];
    /** This can only be done by the logged in user. */
    put: operations["updateUser"];
    /** This can only be done by the logged in user. */
    delete: operations["deleteUser"];
  };
}

export interface components {
  schemas: {
    Order: {
      id?: number;
      petId?: number;
      quantity?: number;
      shipDate?: string;
      /** Order Status */
      status?: "placed" | "approved" | "delivered";
      complete?: boolean;
    };
    Customer: {
      id?: number;
      username?: string;
      address?: components["schemas"]["Address"][];
    };
    Address: {
      street?: string;
      city?: string;
      state?: string;
      zip?: string;
    };
    Category: {
      id?: number;
      name?: string;
    };
    User: {
      id?: number;
      username?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      phone?: string;
      /** User Status */
      userStatus?: number;
    };
    Tag: {
      id?: number;
      name?: string;
    };
    Pet: {
      id?: number;
      name: string;
      category?: components["schemas"]["Category"];
      photoUrls: string[];
      tags?: components["schemas"]["Tag"][];
      /** pet status in the store */
      status?: "available" | "pending" | "sold";
    };
    ApiResponse: {
      code?: number;
      type?: string;
      message?: string;
    };
  };
  requestBodies: {
    /** Pet object that needs to be added to the store */
    Pet: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
      };
    };
    /** List of user object */
    UserArray: {
      content: {
        "application/json": components["schemas"]["User"][];
      };
    };
  };
}

export interface operations {
  /** Update an existing pet by Id */
  updatePet: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid ID supplied */
      400: unknown;
      /** Pet not found */
      404: unknown;
      /** Validation exception */
      405: unknown;
    };
    /** Update an existent pet in the store */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
        "application/x-www-form-urlencoded": components["schemas"]["Pet"];
      };
    };
  };
  /** Add a new pet to the store */
  addPet: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid input */
      405: unknown;
    };
    /** Create a new pet in the store */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Pet"];
        "application/xml": components["schemas"]["Pet"];
        "application/x-www-form-urlencoded": components["schemas"]["Pet"];
      };
    };
  };
  /** Multiple status values can be provided with comma separated strings */
  findPetsByStatus: {
    parameters: {
      query: {
        /** Status values that need to be considered for filter */
        status?: "available" | "pending" | "sold";
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"][];
          "application/json": components["schemas"]["Pet"][];
        };
      };
      /** Invalid status value */
      400: unknown;
    };
  };
  /** Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing. */
  findPetsByTags: {
    parameters: {
      query: {
        /** Tags to filter by */
        tags?: string[];
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"][];
          "application/json": components["schemas"]["Pet"][];
        };
      };
      /** Invalid tag value */
      400: unknown;
    };
  };
  /** Returns a single pet */
  getPetById: {
    parameters: {
      path: {
        /** ID of pet to return */
        petId: number;
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Pet"];
          "application/json": components["schemas"]["Pet"];
        };
      };
      /** Invalid ID supplied */
      400: unknown;
      /** Pet not found */
      404: unknown;
    };
  };
  updatePetWithForm: {
    parameters: {
      path: {
        /** ID of pet that needs to be updated */
        petId: number;
      };
      query: {
        /** Name of pet that needs to be updated */
        name?: string;
        /** Status of pet that needs to be updated */
        status?: string;
      };
    };
    responses: {
      /** Invalid input */
      405: unknown;
    };
  };
  deletePet: {
    parameters: {
      header: {
        api_key?: string;
      };
      path: {
        /** Pet id to delete */
        petId: number;
      };
    };
    responses: {
      /** Invalid pet value */
      400: unknown;
    };
  };
  uploadFile: {
    parameters: {
      path: {
        /** ID of pet to update */
        petId: number;
      };
      query: {
        /** Additional Metadata */
        additionalMetadata?: string;
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["ApiResponse"];
        };
      };
    };
    requestBody: {
      content: {
        "application/octet-stream": string;
      };
    };
  };
  /** Returns a map of status codes to quantities */
  getInventory: {
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/json": { [key: string]: number };
        };
      };
    };
  };
  /** Place a new order in the store */
  placeOrder: {
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/json": components["schemas"]["Order"];
        };
      };
      /** Invalid input */
      405: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["Order"];
        "application/xml": components["schemas"]["Order"];
        "application/x-www-form-urlencoded": components["schemas"]["Order"];
      };
    };
  };
  /** For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions */
  getOrderById: {
    parameters: {
      path: {
        /** ID of order that needs to be fetched */
        orderId: number;
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["Order"];
          "application/json": components["schemas"]["Order"];
        };
      };
      /** Invalid ID supplied */
      400: unknown;
      /** Order not found */
      404: unknown;
    };
  };
  /** For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors */
  deleteOrder: {
    parameters: {
      path: {
        /** ID of the order that needs to be deleted */
        orderId: number;
      };
    };
    responses: {
      /** Invalid ID supplied */
      400: unknown;
      /** Order not found */
      404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  createUser: {
    responses: {
      /** successful operation */
      default: {
        content: {
          "application/json": components["schemas"]["User"];
          "application/xml": components["schemas"]["User"];
        };
      };
    };
    /** Created user object */
    requestBody: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/xml": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
      };
    };
  };
  /** Creates list of users with given input array */
  createUsersWithListInput: {
    responses: {
      /** Successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["User"];
          "application/json": components["schemas"]["User"];
        };
      };
      /** successful operation */
      default: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["User"][];
      };
    };
  };
  loginUser: {
    parameters: {
      query: {
        /** The user name for login */
        username?: string;
        /** The password for login in clear text */
        password?: string;
      };
    };
    responses: {
      /** successful operation */
      200: {
        headers: {
          /** calls per hour allowed by the user */
          "X-Rate-Limit"?: number;
          /** date in UTC when token expires */
          "X-Expires-After"?: string;
        };
        content: {
          "application/xml": string;
          "application/json": string;
        };
      };
      /** Invalid username/password supplied */
      400: unknown;
    };
  };
  logoutUser: {
    parameters: {};
    responses: {
      /** successful operation */
      default: unknown;
    };
  };
  getUserByName: {
    parameters: {
      path: {
        /** The name that needs to be fetched. Use user1 for testing. */
        username: string;
      };
    };
    responses: {
      /** successful operation */
      200: {
        content: {
          "application/xml": components["schemas"]["User"];
          "application/json": components["schemas"]["User"];
        };
      };
      /** Invalid username supplied */
      400: unknown;
      /** User not found */
      404: unknown;
    };
  };
  /** This can only be done by the logged in user. */
  updateUser: {
    parameters: {
      path: {
        /** name that need to be deleted */
        username: string;
      };
    };
    responses: {
      /** successful operation */
      default: unknown;
    };
    /** Update an existent user in the store */
    requestBody: {
      content: {
        "application/json": components["schemas"]["User"];
        "application/xml": components["schemas"]["User"];
        "application/x-www-form-urlencoded": components["schemas"]["User"];
      };
    };
  };
  /** This can only be done by the logged in user. */
  deleteUser: {
    parameters: {
      path: {
        /** The name that needs to be deleted */
        username: string;
      };
    };
    responses: {
      /** Invalid username supplied */
      400: unknown;
      /** User not found */
      404: unknown;
    };
  };
}
