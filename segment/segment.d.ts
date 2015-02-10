declare module analytics {

    export interface Traits {
        address?: {
            city?: string;
            country?: string;
            postalCode?: string;
            state?: string;
            street?: string;
        };
        age?: number;
        avatar?: string;
        birthday?: Date;
        createdAt?: any;
        description?: string;
        email?: string;
        employees?: number;
        firstName?: string;
        gender?: string;
        id?:string;
        industry?: string;
        lastName?: string;
        name?: string;
        phone?: string;
        title?: string;
        username?: string;
        website?: string;

        [special: string]: any;
    }

    export interface Context {
        app?: {
            name?: string;
            version?: string;
            build?: string;
        };
        campaign?: {
            name?: string;
            source?: string;
            medium?: string;
            term?: string;
            content?: string;
        };
        device?: {
            id?: string;
            manufacturer?: string;
            model?: string;
            name?: string;
            type?: string;
            version?: string;
        };
        ip?: string;
        library?: {
            name?: string;
            version?: string;
        };
        locale?: string;
        location?: {
            city?: string;
            country?: string;
            latitude?: string;
            longitude?: string;
            region?: string;
            speed?: string;
        };
        network?: {
            bluetooth?: string;
            carrier?: string;
            cellular?: string;
            wifi?: string;
        };
        os?: {
            name?: string;
            version?: string;
        };
        referrer?: {
            type?: string;
            name?: string;
            url?: string;
            link?: string;
        };
        screen?: {
            density?: string;
            height?: string;
            width?: string;
        };
        timezone?: string;
        traits?: {[special: string]: any};
        userAgent?: string;

        [special: string]: any;
    }

    export interface Properties {
        properties: {
            /**
             *
             */
            page?: string;
            /**
             * which angular template the event tracks to
             */
            template?: string;

        }
    }

    export interface TraitsContext extends Traits, Context { }

    function identify(id?: string, options?: Traits)

    function group(id?: string, options?: TraitsContext)

    function track(event: string, properties?: Properties)

    // defined by https://segment.com/docs/api/tracking/page/
    function page(name?: string, category?: string, specialProperties?: TraitsContext)
}
