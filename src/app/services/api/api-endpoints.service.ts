// Angular Modules
import { Injectable } from '@angular/core';
// Application Classes
import { UrlBuilder } from '@shared/classes/url-builder';
import { QueryStringParameters } from '@shared/classes/query-string-parameters';
// Application Constants
// import { Constants } from '@app/config/constants';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})

// Returns the api endpoints urls to use in services in a consistent way
export class ApiEndpointsService {
  constructor() {} //private constants: Constants // Application Constants

  /* #region EXAMPLES */
  public getDataByIdEndpoint = (id: string): string => this.createUrlWithPathVariables('data', [id]);

  public getDataByIdAndCodeEndpoint = (id: string, code: number): string =>
    this.createUrlWithPathVariables('data', [id, code]);

  public getDataByIdCodeAndYearEndpoint(id: string, code: number, year: number): string {
    const queryString: QueryStringParameters = new QueryStringParameters();
    queryString.push('year', year);
    return `${this.createUrlWithPathVariables('data', [id, code])}?${queryString.toString()}`;
  }

  public getProductListByCountryCodeEndpoint(countryCode: string): string {
    return this.createUrlWithQueryParameters('productlist', (qs: QueryStringParameters) =>
      qs.push('countryCode', countryCode)
    );
  }

  public getProductListByCountryAndPostalCodeEndpoint(countryCode: string, postalCode: string): string {
    return this.createUrlWithQueryParameters('productlist', (qs: QueryStringParameters) => {
      qs.push('countryCode', countryCode);
      qs.push('postalCode', postalCode);
    });
  }

  // call Mock endpoint
  public getNewsEndpoint = (): string => this.createUrl('41gRGwOaw', true);

  public invalidUrlEndpoint = (): string => this.createUrl('invalidurl', true);

  // TALENT MANAGEMENT
  // call Positions endpoint
  public getPositionByIdEndpoint = (id: string): string => this.createUrlWithPathVariables('Positions', [id]);
  public deletePositionByIdEndpoint = (id: string): string => this.createUrlWithPathVariables('Positions', [id]);
  public postPositionsPagedEndpoint = (): string => this.createUrl('Positions/Paged');
  public postPositionsEndpoint = (): string => this.createUrl('Positions');
  public putPositionsEndpoint = (id: string): string => this.createUrlWithPathVariables('Positions', [id]);
  // call Employees endpoint
  public postEmployeesPagedEndpoint = (): string => this.createUrl('Employees/Paged');
  // call Departments endpoint
  public getDepartmentsEndpoint = (): string => this.createUrl('Departments');
  // call SalaryRanges endpoint
  public getSalaryRangesEndpoint = (): string => this.createUrl('SalaryRanges');

  // call regular endpoint without boolean true at end
  public getPersonsEndpoint = (): string => this.createUrl('Persons');

  // Call API technique https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

  // call Mock endpoint
  // https://angular-datatables-demo-server.herokuapp.com

  // call Evaluations endpoint
  public getEvaluationByIdEndpoint = (id: string): string => this.createUrlWithPathVariables('Evaluations', [id]);

  public getEvaluationByPlayerIdAndSkillLevelEndpoint(playerId: string, skillLevel: string): string {
    return this.createUrlWithQueryParameters('Evaluations', (qs: QueryStringParameters) => {
      qs.push('PlayerId', playerId);
      qs.push('SkillLevel', skillLevel);
    });
  }

  // call Positions endpoint

  public postPersonsEndpoint = (): string => this.createUrl('', true);

  // call regular endpoint without boolean true at end
  // https://localhost:44378/api/v1 (ASP.NET CORE REST API.  Repo https://github.com/workcontrolgit/AngularNgxDataTableBackend)

  // public putPositionsPagedEndpoint = (id: string): string => this.createUrlWithPathVariables('Positions', [id]);

  /* #endregion */

  /* #region URL CREATOR */
  // URL
  private createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? environment.apiMockEndpoint : environment.apiEndpoint,
      action
    );
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(environment.apiEndpoint, action);
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(action: string, pathVariables: any[] = []): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(environment.apiEndpoint, `${action}${encodedPathVariablesUrl}`);
    return urlBuilder.toString();
  }
  /* #endregion */
}
