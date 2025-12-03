import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
    slug: 'users',
    fields: [
        {
            name: 'role',
            type: 'select',
            options: [
                {label: 'User', value: 'user'},
                {label: 'Admin', value: 'admin'}
            ],
            
        }
    ]
}