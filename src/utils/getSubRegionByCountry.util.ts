import { Api } from '@/models/api'

export function getSubRegionByCountryCode(code: Api.CountryType): Api.SubRegionType {
    switch (code) {
        // Caribbean
        case Api.CountryType.ANGUILLA:
        case Api.CountryType.ANTIGUA_AND_BARBUDA:
        case Api.CountryType.BAHAMAS:
        case Api.CountryType.BARBADOS:
        case Api.CountryType.CAYMAN_ISLANDS:
        case Api.CountryType.CUBA:
        case Api.CountryType.DOMINICA:
        case Api.CountryType.DOMINICAN_REPUBLIC:
        case Api.CountryType.GRENADA:
        case Api.CountryType.GUADELOUPE:
        case Api.CountryType.HAITI:
        case Api.CountryType.JAMAICA:
        case Api.CountryType.MARTINIQUE:
        case Api.CountryType.MONTSERRAT:
        case Api.CountryType.PUERTO_RICO:
        // case Api.CountryType.SAINT_BARTHELEMY:
        case Api.CountryType.SAINT_KITTS_AND_NEVIS:
        case Api.CountryType.SAINT_LUCIA:
        // case Api.CountryType.SAINT_MARTIN:
        case Api.CountryType.SAINT_VINCENT_AND_THE_GRENADINES:
        case Api.CountryType.TRINIDAD_AND_TOBAGO:
        case Api.CountryType.TURKS_AND_CAICOS:
        case Api.CountryType.VIRGIN_ISLANDS_BRITISH:
        case Api.CountryType.VIRGIN_ISLANDS_US:
            return Api.SubRegionType.CARIBBEAN

        // Central Africa
        case Api.CountryType.ANGOLA:
        case Api.CountryType.BURUNDI:
        case Api.CountryType.CAMEROON:
        case Api.CountryType.CENTRAL_AFRICAN_REPUBLIC:
        case Api.CountryType.CHAD:
        case Api.CountryType.REPUBLIC_OF_CONGO:
        case Api.CountryType.DEMOCRATIC_REPUBLIC_OF_CONGO:
        case Api.CountryType.EQUATORIAL_GUINEA:
        case Api.CountryType.GABON:
        case Api.CountryType.RWANDA:
        case Api.CountryType.SAO_TOME_AND_PRINCIPE:
            return Api.SubRegionType.CENTRAL_AFRICA

        // Central America
        case Api.CountryType.BELIZE:
        case Api.CountryType.COSTA_RICA:
        case Api.CountryType.EL_SALVADOR:
        case Api.CountryType.GUATEMALA:
        case Api.CountryType.HONDURAS:
        case Api.CountryType.NICARAGUA:
        case Api.CountryType.PANAMA:
            return Api.SubRegionType.CENTRAL_AMERICA

        // Central Asia
        case Api.CountryType.KAZAKHSTAN:
        case Api.CountryType.KYRGYZSTAN:
        case Api.CountryType.TAJIKISTAN:
        case Api.CountryType.TURKMENISTAN:
        case Api.CountryType.UZBEKISTAN:
            return Api.SubRegionType.CENTRAL_ASIA

        // East Africa
        // case Api.CountryType.BURUNDI:
        case Api.CountryType.COMOROS:
        case Api.CountryType.DJIBOUTI:
        case Api.CountryType.ERITREA:
        case Api.CountryType.ETHIOPIA:
        case Api.CountryType.KENYA:
        case Api.CountryType.MADAGASCAR:
        case Api.CountryType.MALAWI:
        case Api.CountryType.MAURITIUS:
        case Api.CountryType.MOZAMBIQUE:
        // case Api.CountryType.RWANDA:
        case Api.CountryType.SEYCHELLES:
        case Api.CountryType.SOMALIA:
        case Api.CountryType.SOUTH_SUDAN:
        case Api.CountryType.TANZANIA:
        case Api.CountryType.UGANDA:
        case Api.CountryType.ZAMBIA:
        case Api.CountryType.ZIMBABWE:
            return Api.SubRegionType.EAST_AFRICA

        // East Asia
        case Api.CountryType.CHINA:
        case Api.CountryType.HONG_KONG:
        case Api.CountryType.JAPAN:
        case Api.CountryType.MACAU:
        case Api.CountryType.MONGOLIA:
        case Api.CountryType.NORTH_KOREA:
        case Api.CountryType.SOUTH_KOREA:
        case Api.CountryType.TAIWAN:
            return Api.SubRegionType.EAST_ASIA

        // East Europe
        case Api.CountryType.BELARUS:
        case Api.CountryType.BULGARIA:
        case Api.CountryType.CZECH_REPUBLIC:
        case Api.CountryType.HUNGARY:
        case Api.CountryType.MOLDOVA:
        case Api.CountryType.POLAND:
        case Api.CountryType.ROMANIA:
        case Api.CountryType.RUSSIA:
        case Api.CountryType.SLOVAKIA:
        case Api.CountryType.UKRAINE:
            return Api.SubRegionType.EAST_EUROPE

        // North Africa
        case Api.CountryType.ALGERIA:
        case Api.CountryType.EGYPT:
        case Api.CountryType.LIBYA:
        case Api.CountryType.MAURITANIA:
        case Api.CountryType.MOROCCO:
        case Api.CountryType.SUDAN:
        case Api.CountryType.TUNISIA:
        case Api.CountryType.WESTERN_SAHARA:
            return Api.SubRegionType.NORTH_AFRICA

        // North America
        case Api.CountryType.CANADA:
        case Api.CountryType.GREENLAND:
        case Api.CountryType.MEXICO:
        case Api.CountryType.UNITED_STATES:
            return Api.SubRegionType.NORTH_AMERICA

        // North Europe
        case Api.CountryType.DENMARK:
        case Api.CountryType.ESTONIA:
        case Api.CountryType.ENGLAND:
        case Api.CountryType.WALES:
        case Api.CountryType.NORTHERN_IRELAND:
        case Api.CountryType.FINLAND:
        case Api.CountryType.ICELAND:
        case Api.CountryType.IRELAND:
        case Api.CountryType.LATVIA:
        case Api.CountryType.LITHUANIA:
        case Api.CountryType.NORWAY:
        case Api.CountryType.SWEDEN:
        case Api.CountryType.UNITED_KINGDOM:
            return Api.SubRegionType.NORTH_EUROPE

        // Middle East
        case Api.CountryType.ARMENIA:
        case Api.CountryType.AZERBAIJAN:
        case Api.CountryType.BAHRAIN:
        case Api.CountryType.CYPRUS:
        case Api.CountryType.IRAN:
        case Api.CountryType.IRAQ:
        case Api.CountryType.ISRAEL:
        case Api.CountryType.GEORGIA:
        case Api.CountryType.JORDAN:
        case Api.CountryType.KUWAIT:
        case Api.CountryType.LEBANON:
        case Api.CountryType.OMAN:
        case Api.CountryType.PALESTINE:
        case Api.CountryType.QATAR:
        case Api.CountryType.SAUDI_ARABIA:
        case Api.CountryType.SYRIA:
        case Api.CountryType.TURKEY:
        case Api.CountryType.UNITED_ARAB_EMIRATES:
        case Api.CountryType.YEMEN:
            return Api.SubRegionType.MIDDLE_EAST

        // Oceania
        case Api.CountryType.AUSTRALIA:
        case Api.CountryType.FIJI:
        case Api.CountryType.KIRIBATI:
        case Api.CountryType.MARSHALL_ISLANDS:
        case Api.CountryType.MICRONESIA:
        case Api.CountryType.NAURU:
        case Api.CountryType.NEW_ZEALAND:
        case Api.CountryType.PALAU:
        case Api.CountryType.PAPUA_NEW_GUINEA:
        case Api.CountryType.SAMOA:
        case Api.CountryType.SOLOMON_ISLANDS:
        case Api.CountryType.TONGA:
        case Api.CountryType.TUVALU:
        case Api.CountryType.VANUATU:
            return Api.SubRegionType.OCEANIA

        // Southern Africa
        case Api.CountryType.BOTSWANA:
        case Api.CountryType.LESOTHO:
        case Api.CountryType.NAMIBIA:
        case Api.CountryType.SOUTH_AFRICA:
        case Api.CountryType.ESWATINI:
            return Api.SubRegionType.SOUTH_AFRICA

        // South America
        case Api.CountryType.ARGENTINA:
        case Api.CountryType.BOLIVIA:
        case Api.CountryType.BRAZIL:
        case Api.CountryType.CHILE:
        case Api.CountryType.COLOMBIA:
        case Api.CountryType.ECUADOR:
        case Api.CountryType.FALKLAND_ISLANDS:
        case Api.CountryType.FRENCH_GUIANA:
        case Api.CountryType.GUYANA:
        case Api.CountryType.PARAGUAY:
        case Api.CountryType.PERU:
        case Api.CountryType.SURINAME:
        case Api.CountryType.URUGUAY:
        case Api.CountryType.VENEZUELA:
            return Api.SubRegionType.SOUTH_AMERICA

        // Southeast Asia
        case Api.CountryType.BRUNEI_DARUSSALAM:
        case Api.CountryType.CAMBODIA:
        case Api.CountryType.INDONESIA:
        case Api.CountryType.LAOS: // Laos
        case Api.CountryType.MALAYSIA:
        case Api.CountryType.MYANMAR: // Also known as Burma
        case Api.CountryType.PHILIPPINES:
        case Api.CountryType.SINGAPORE:
        case Api.CountryType.THAILAND:
        case Api.CountryType.TIMOR_LESTE: // East Timor
        case Api.CountryType.VIETNAM: // Vietnam
            return Api.SubRegionType.SOUTH_EAST_ASIA

        // Southern Europe
        case Api.CountryType.ALBANIA:
        case Api.CountryType.ANDORRA:
        case Api.CountryType.BOSNIA_AND_HERZEGOVINA:
        case Api.CountryType.CROATIA:
        case Api.CountryType.GREECE:
        case Api.CountryType.ITALY:
        case Api.CountryType.KOSOVO:
        case Api.CountryType.MALTA:
        case Api.CountryType.MONTENEGRO:
        case Api.CountryType.NORTH_MACEDONIA:
        case Api.CountryType.PORTUGAL:
        case Api.CountryType.SAN_MARINO:
        case Api.CountryType.SERBIA:
        case Api.CountryType.SLOVENIA:
        case Api.CountryType.SPAIN:
        case Api.CountryType.HOLY_SEE:
            return Api.SubRegionType.SOUTH_EUROPE

        // South-Central Asia
        case Api.CountryType.AFGHANISTAN:
        case Api.CountryType.BANGLADESH:
        case Api.CountryType.BHUTAN:
        case Api.CountryType.INDIA:
        case Api.CountryType.MALDIVES:
        case Api.CountryType.NEPAL:
        case Api.CountryType.PAKISTAN:
        case Api.CountryType.SRI_LANKA:
            return Api.SubRegionType.SOUTH_CENTRAL_ASIA

        // West Africa
        case Api.CountryType.BENIN:
        case Api.CountryType.BURKINA_FASO:
        case Api.CountryType.CAPE_VERDE: // Cape Verde
        case Api.CountryType.IVORY_COAST: // Ivory Coast
        case Api.CountryType.GAMBIA:
        case Api.CountryType.GHANA:
        case Api.CountryType.GUINEA:
        case Api.CountryType.GUINEA_BISSAU:
        case Api.CountryType.LIBERIA:
        case Api.CountryType.MALI:
        case Api.CountryType.NIGER:
        case Api.CountryType.NIGERIA:
        case Api.CountryType.SENEGAL:
        case Api.CountryType.SIERRA_LEONE:
        case Api.CountryType.TOGO:
            return Api.SubRegionType.WEST_AFRICA

        // Western Europe
        case Api.CountryType.AUSTRIA:
        case Api.CountryType.BELGIUM:
        case Api.CountryType.FRANCE:
        case Api.CountryType.GERMANY:
        case Api.CountryType.LIECHTENSTEIN:
        case Api.CountryType.LUXEMBOURG:
        case Api.CountryType.MONACO:
        case Api.CountryType.NETHERLANDS:
        case Api.CountryType.SWITZERLAND:
            return Api.SubRegionType.WEST_EUROPE

        // WorldWide Fallback
        default:
            return Api.RegionType.WORLDWIDE
    }
}
