// ====================================================
// Documents
// ====================================================

export type CountriesVariables = {};

export type CountriesQuery = {
  readonly __typename?: "Query";

  readonly countries: CountriesCountries;
};

export type CountriesCountries = {
  readonly __typename?: "CountriesPayload";

  readonly countries: CountriesReadonlyArray<_Countries> | null;
};

export type Countries_Countries = {
  readonly __typename?: "Country";

  readonly code: string;

  readonly name: string;
};
