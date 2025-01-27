// This file is auto-generated by @hey-api/openapi-ts

export const AccountSchema = {
    description: 'Representation of an account.',
    properties: {
        createTime: {
            description: 'Output only. Creation time of the account.',
            format: 'google-datetime',
            readOnly: true,
            type: 'string'
        },
        displayName: {
            description: 'Output only. Display name of this account.',
            readOnly: true,
            type: 'string'
        },
        name: {
            description: 'Output only. Resource name of the account. Format: accounts/pub-[0-9]+',
            readOnly: true,
            type: 'string'
        },
        pendingTasks: {
            description: 'Output only. Outstanding tasks that need to be completed as part of the sign-up process for a new account. e.g. "billing-profile-creation", "phone-pin-verification".',
            items: {
                type: 'string'
            },
            readOnly: true,
            type: 'array'
        },
        premium: {
            description: 'Output only. Whether this account is premium.',
            readOnly: true,
            type: 'boolean'
        },
        state: {
            description: 'Output only. State of the account.',
            enum: ['STATE_UNSPECIFIED', 'READY', 'NEEDS_ATTENTION', 'CLOSED'],
            readOnly: true,
            type: 'string'
        },
        timeZone: {
            '$ref': '#/components/schemas/TimeZone',
            description: 'The account time zone, as used by reporting. For more information, see [changing the time zone of your reports](https://support.google.com/adsense/answer/9830725).'
        }
    },
    type: 'object'
} as const;

export const AdBlockingRecoveryTagSchema = {
    description: 'Representation of an ad blocking recovery tag. See https://support.google.com/adsense/answer/11575177.',
    properties: {
        errorProtectionCode: {
            description: "Error protection code that can be used in conjunction with the tag. It'll display a message to users if an [ad blocking extension blocks their access to your site](https://support.google.com/adsense/answer/11575480).",
            type: 'string'
        },
        tag: {
            description: "The ad blocking recovery tag. Note that the message generated by the tag can be blocked by an ad blocking extension. If this is not your desired outcome, then you'll need to use it in conjunction with the error protection code.",
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const AdClientSchema = {
    description: "Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.",
    properties: {
        name: {
            description: 'Output only. Resource name of the ad client. Format: accounts/{account}/adclients/{adclient}',
            readOnly: true,
            type: 'string'
        },
        productCode: {
            description: 'Output only. Reporting product code of the ad client. For example, "AFC" for AdSense for Content. Corresponds to the `PRODUCT_CODE` dimension, and present only if the ad client supports reporting.',
            readOnly: true,
            type: 'string'
        },
        reportingDimensionId: {
            description: 'Output only. Unique ID of the ad client as used in the `AD_CLIENT_ID` reporting dimension. Present only if the ad client supports reporting.',
            readOnly: true,
            type: 'string'
        },
        state: {
            description: 'Output only. State of the ad client.',
            enum: ['STATE_UNSPECIFIED', 'READY', 'GETTING_READY', 'REQUIRES_REVIEW'],
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const AdClientAdCodeSchema = {
    description: 'Representation of the AdSense code for a given ad client. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).',
    properties: {
        adCode: {
            description: 'Output only. The AdSense code snippet to add to the head of an HTML page.',
            readOnly: true,
            type: 'string'
        },
        ampBody: {
            description: 'Output only. The AdSense code snippet to add to the body of an AMP page.',
            readOnly: true,
            type: 'string'
        },
        ampHead: {
            description: 'Output only. The AdSense code snippet to add to the head of an AMP page.',
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const AdUnitSchema = {
    description: 'Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.',
    properties: {
        contentAdsSettings: {
            '$ref': '#/components/schemas/ContentAdsSettings',
            description: 'Required. Settings specific to content ads (AFC).'
        },
        displayName: {
            description: 'Required. Display name of the ad unit, as provided when the ad unit was created.',
            type: 'string'
        },
        name: {
            description: 'Output only. Resource name of the ad unit. Format: accounts/{account}/adclients/{adclient}/adunits/{adunit}',
            readOnly: true,
            type: 'string'
        },
        reportingDimensionId: {
            description: 'Output only. Unique ID of the ad unit as used in the `AD_UNIT_ID` reporting dimension.',
            readOnly: true,
            type: 'string'
        },
        state: {
            description: 'Required. State of the ad unit.',
            enum: ['STATE_UNSPECIFIED', 'ACTIVE', 'ARCHIVED'],
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const AdUnitAdCodeSchema = {
    description: 'Representation of the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).',
    properties: {
        adCode: {
            description: 'Output only. The code snippet to add to the body of an HTML page.',
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const AlertSchema = {
    description: 'Representation of an alert.',
    properties: {
        message: {
            description: 'Output only. The localized alert message. This may contain HTML markup, such as phrase elements or links.',
            readOnly: true,
            type: 'string'
        },
        name: {
            description: 'Output only. Resource name of the alert. Format: accounts/{account}/alerts/{alert}',
            readOnly: true,
            type: 'string'
        },
        severity: {
            description: 'Output only. Severity of this alert.',
            enum: ['SEVERITY_UNSPECIFIED', 'INFO', 'WARNING', 'SEVERE'],
            readOnly: true,
            type: 'string'
        },
        type: {
            description: 'Output only. Type of alert. This identifies the broad type of this alert, and provides a stable machine-readable identifier that will not be translated. For example, "payment-hold".',
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const CellSchema = {
    description: 'Cell representation.',
    properties: {
        value: {
            description: 'Value in the cell. The dimension cells contain strings, and the metric cells contain numbers.',
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ContentAdsSettingsSchema = {
    description: 'Settings specific to content ads (AFC).',
    properties: {
        size: {
            description: 'Required. Size of the ad unit. e.g. "728x90", "1x3" (for responsive ad units).',
            type: 'string'
        },
        type: {
            description: 'Required. Type of the ad unit.',
            enum: ['TYPE_UNSPECIFIED', 'DISPLAY', 'FEED', 'ARTICLE', 'MATCHED_CONTENT', 'LINK'],
            type: 'string',
            'x-enumDeprecated': [false, false, false, false, false, true]
        }
    },
    type: 'object'
} as const;

export const CustomChannelSchema = {
    description: 'Representation of a custom channel.',
    properties: {
        active: {
            description: 'Whether the custom channel is active and collecting data. See https://support.google.com/adsense/answer/10077192.',
            type: 'boolean'
        },
        displayName: {
            description: 'Required. Display name of the custom channel.',
            type: 'string'
        },
        name: {
            description: 'Output only. Resource name of the custom channel. Format: accounts/{account}/adclients/{adclient}/customchannels/{customchannel}',
            readOnly: true,
            type: 'string'
        },
        reportingDimensionId: {
            description: 'Output only. Unique ID of the custom channel as used in the `CUSTOM_CHANNEL_ID` reporting dimension.',
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const DateSchema = {
    description: 'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    properties: {
        day: {
            description: "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
            format: 'int32',
            type: 'integer'
        },
        month: {
            description: 'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
            format: 'int32',
            type: 'integer'
        },
        year: {
            description: 'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
            format: 'int32',
            type: 'integer'
        }
    },
    type: 'object'
} as const;

export const EmptySchema = {
    description: 'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
    properties: {},
    type: 'object'
} as const;

export const HeaderSchema = {
    description: 'The header information of the columns requested in the report.',
    properties: {
        currencyCode: {
            description: 'The [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) of this column. Only present if the header type is METRIC_CURRENCY.',
            type: 'string'
        },
        name: {
            description: 'Required. Name of the header.',
            type: 'string'
        },
        type: {
            description: 'Required. Type of the header.',
            enum: ['HEADER_TYPE_UNSPECIFIED', 'DIMENSION', 'METRIC_TALLY', 'METRIC_RATIO', 'METRIC_CURRENCY', 'METRIC_MILLISECONDS', 'METRIC_DECIMAL'],
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const HttpBodySchema = {
    description: "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    properties: {
        contentType: {
            description: 'The HTTP Content-Type header value specifying the content type of the body.',
            type: 'string'
        },
        data: {
            description: 'The HTTP request/response body as raw binary.',
            format: 'byte',
            type: 'string'
        },
        extensions: {
            description: 'Application specific response metadata. Must be set in the first response for streaming APIs.',
            items: {
                additionalProperties: {
                    description: 'Properties of the object. Contains field @type with type URL.'
                },
                type: 'object'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const ListAccountsResponseSchema = {
    description: 'Response definition for the account list rpc.',
    properties: {
        accounts: {
            description: 'The accounts returned in this list response.',
            items: {
                '$ref': '#/components/schemas/Account'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListAdClientsResponseSchema = {
    description: 'Response definition for the ad client list rpc.',
    properties: {
        adClients: {
            description: 'The ad clients returned in this list response.',
            items: {
                '$ref': '#/components/schemas/AdClient'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through ad clients. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListAdUnitsResponseSchema = {
    description: 'Response definition for the adunit list rpc.',
    properties: {
        adUnits: {
            description: 'The ad units returned in the list response.',
            items: {
                '$ref': '#/components/schemas/AdUnit'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through ad units. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListAlertsResponseSchema = {
    description: 'Response definition for the alerts list rpc.',
    properties: {
        alerts: {
            description: 'The alerts returned in this list response.',
            items: {
                '$ref': '#/components/schemas/Alert'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const ListChildAccountsResponseSchema = {
    description: 'Response definition for the child account list rpc.',
    properties: {
        accounts: {
            description: 'The accounts returned in this list response.',
            items: {
                '$ref': '#/components/schemas/Account'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListCustomChannelsResponseSchema = {
    description: 'Response definition for the custom channel list rpc.',
    properties: {
        customChannels: {
            description: 'The custom channels returned in this list response.',
            items: {
                '$ref': '#/components/schemas/CustomChannel'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through alerts. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListLinkedAdUnitsResponseSchema = {
    description: 'Response definition for the ad units linked to a custom channel list rpc.',
    properties: {
        adUnits: {
            description: 'The ad units returned in the list response.',
            items: {
                '$ref': '#/components/schemas/AdUnit'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through ad units. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListLinkedCustomChannelsResponseSchema = {
    description: 'Response definition for the custom channels linked to an adunit list rpc.',
    properties: {
        customChannels: {
            description: 'The custom channels returned in this list response.',
            items: {
                '$ref': '#/components/schemas/CustomChannel'
            },
            type: 'array'
        },
        nextPageToken: {
            description: `Continuation token used to page through alerts. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ListPaymentsResponseSchema = {
    description: 'Response definition for the payments list rpc.',
    properties: {
        payments: {
            description: 'The payments returned in this list response.',
            items: {
                '$ref': '#/components/schemas/Payment'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const ListSavedReportsResponseSchema = {
    description: 'Response definition for the saved reports list rpc.',
    properties: {
        nextPageToken: {
            description: `Continuation token used to page through reports. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        },
        savedReports: {
            description: 'The reports returned in this list response.',
            items: {
                '$ref': '#/components/schemas/SavedReport'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const ListSitesResponseSchema = {
    description: 'Response definition for the sites list rpc.',
    properties: {
        nextPageToken: {
            description: `Continuation token used to page through sites. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        },
        sites: {
            description: 'The sites returned in this list response.',
            items: {
                '$ref': '#/components/schemas/Site'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const ListUrlChannelsResponseSchema = {
    description: 'Response definition for the url channels list rpc.',
    properties: {
        nextPageToken: {
            description: `Continuation token used to page through url channels. To retrieve the next page of the results, set the next request's "page_token" value to this.`,
            type: 'string'
        },
        urlChannels: {
            description: 'The url channels returned in this list response.',
            items: {
                '$ref': '#/components/schemas/UrlChannel'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const PaymentSchema = {
    description: 'Representation of an unpaid or paid payment. See [Payment timelines for AdSense](https://support.google.com/adsense/answer/7164703) for more information about payments and the [YouTube homepage and payments account](https://support.google.com/adsense/answer/11622510) article for information about dedicated payments accounts for YouTube.',
    properties: {
        amount: {
            description: 'Output only. The amount of unpaid or paid earnings, as a formatted string, including the currency. E.g. "¥1,235 JPY", "$1,234.57", "£87.65".',
            readOnly: true,
            type: 'string'
        },
        date: {
            '$ref': '#/components/schemas/Date',
            description: 'Output only. For paid earnings, the date that the payment was credited. For unpaid earnings, this field is empty. Payment dates are always returned in the billing timezone (America/Los_Angeles).',
            readOnly: true
        },
        name: {
            description: 'Output only. Resource name of the payment. Format: - accounts/{account}/payments/unpaid for unpaid (current) AdSense earnings. - accounts/{account}/payments/youtube-unpaid for unpaid (current) YouTube earnings. - accounts/{account}/payments/yyyy-MM-dd for paid AdSense earnings. - accounts/{account}/payments/youtube-yyyy-MM-dd for paid YouTube earnings.',
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const ReportResultSchema = {
    description: 'Result of a generated report.',
    properties: {
        averages: {
            '$ref': '#/components/schemas/Row',
            description: 'The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.'
        },
        endDate: {
            '$ref': '#/components/schemas/Date',
            description: 'Required. End date of the range (inclusive).'
        },
        headers: {
            description: 'The header information; one for each dimension in the request, followed by one for each metric in the request.',
            items: {
                '$ref': '#/components/schemas/Header'
            },
            type: 'array'
        },
        rows: {
            description: 'The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request.',
            items: {
                '$ref': '#/components/schemas/Row'
            },
            type: 'array'
        },
        startDate: {
            '$ref': '#/components/schemas/Date',
            description: 'Required. Start date of the range (inclusive).'
        },
        totalMatchedRows: {
            description: 'The total number of rows matched by the report request.',
            format: 'int64',
            type: 'string'
        },
        totals: {
            '$ref': '#/components/schemas/Row',
            description: 'The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.'
        },
        warnings: {
            description: 'Any warnings associated with generation of the report. These warnings are always returned in English.',
            items: {
                type: 'string'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const RowSchema = {
    description: 'Row representation.',
    properties: {
        cells: {
            description: 'Cells in the row.',
            items: {
                '$ref': '#/components/schemas/Cell'
            },
            type: 'array'
        }
    },
    type: 'object'
} as const;

export const SavedReportSchema = {
    description: 'Representation of a saved report.',
    properties: {
        name: {
            description: 'Output only. Resource name of the report. Format: accounts/{account}/reports/{report}',
            readOnly: true,
            type: 'string'
        },
        title: {
            description: 'Report title as specified by publisher.',
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const SiteSchema = {
    description: 'Representation of a Site.',
    properties: {
        autoAdsEnabled: {
            description: 'Whether auto ads is turned on for the site.',
            type: 'boolean'
        },
        domain: {
            description: 'Domain (or subdomain) of the site, e.g. "example.com" or "www.example.com". This is used in the `OWNED_SITE_DOMAIN_NAME` reporting dimension.',
            type: 'string'
        },
        name: {
            description: 'Output only. Resource name of a site. Format: accounts/{account}/sites/{site}',
            readOnly: true,
            type: 'string'
        },
        reportingDimensionId: {
            description: 'Output only. Unique ID of the site as used in the `OWNED_SITE_ID` reporting dimension.',
            readOnly: true,
            type: 'string'
        },
        state: {
            description: 'Output only. State of a site.',
            enum: ['STATE_UNSPECIFIED', 'REQUIRES_REVIEW', 'GETTING_READY', 'READY', 'NEEDS_ATTENTION'],
            readOnly: true,
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const TimeZoneSchema = {
    description: 'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    properties: {
        id: {
            description: 'IANA Time Zone Database time zone, e.g. "America/New_York".',
            type: 'string'
        },
        version: {
            description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".',
            type: 'string'
        }
    },
    type: 'object'
} as const;

export const UrlChannelSchema = {
    description: 'Representation of a URL channel. URL channels allow you to track the performance of particular pages in your site; see [URL channels](https://support.google.com/adsense/answer/2923836) for more information.',
    properties: {
        name: {
            description: 'Output only. Resource name of the URL channel. Format: accounts/{account}/adclients/{adclient}/urlchannels/{urlchannel}',
            readOnly: true,
            type: 'string'
        },
        reportingDimensionId: {
            description: 'Output only. Unique ID of the custom channel as used in the `URL_CHANNEL_ID` reporting dimension.',
            readOnly: true,
            type: 'string'
        },
        uriPattern: {
            description: 'URI pattern of the channel. Does not include "http://" or "https://". Example: www.example.com/home',
            type: 'string'
        }
    },
    type: 'object'
} as const;