/*import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { ServiceLogs } from "../../../common/service-logs";
import { ComputerStation } from "../_models/computer-station";
import { Vclasse, VClassState } from "../_models/vclasse";

@Injectable({
    providedIn: 'root',
})
export class VClassesService implements OnDestroy {
    private API_URL = `${environment.apiUrl}/VClass/`;
    private getVclassesByUserUrl: string = this.API_URL + 'ByUser/';
    private getAllVClassesUrl: string = this.API_URL + 'All/';
    private vClassLeftCountUrl: string = this.API_URL + 'VClassLeftCount/';
    private stateVClassUrl: string = this.API_URL + 'StateVClass/';
    private startStopVMVClassUrl: string = this.API_URL + 'StartStopVM/';

    vClassLoadingSubject: BehaviorSubject<boolean>;

    constructor(private http: HttpClient, private _serviceLogs: ServiceLogs) {
        this.vClassLoadingSubject = new BehaviorSubject<boolean>(true);
    }

    ngOnDestroy() {

    }

    vClassLeft(): Observable<number> {
        return this.http.get<number>(this.vClassLeftCountUrl).pipe(
            tap(data => this._serviceLogs.log('vClassLeft', data)),
            catchError(this._serviceLogs.handleError('vClassLeft', this.API_URL))
        )
    }

    addVClasse(vClass: Vclasse): Observable<Vclasse> {
        return this.http.post<Vclasse>(this.API_URL, vClass).pipe(
            tap(data => this._serviceLogs.log('addVclasse', data)),
            catchError(this._serviceLogs.handleError('addVclasse', this.API_URL))
        )
    }

    updateVClasse(vClass: Vclasse, newComputerStations: ComputerStation[]): Observable<Vclasse> {
        var o =
        {
            vClass: vClass,
            newComputerStations: newComputerStations
        };

        return this.http.put<Vclasse>(this.API_URL, o).pipe(
            tap(data => this._serviceLogs.log('updateVclasse', data)),
            catchError(this._serviceLogs.handleError('updateVclasse', this.API_URL))
        )
    }

    deleteVClasse(vclasseId: number): Observable<boolean> {
        return this.http.delete<boolean>(this.API_URL + vclasseId).pipe(
            tap(data => this._serviceLogs.log('deleteVclasse', data)),
            catchError(this._serviceLogs.handleError('startOrStopVMVClass', this.API_URL))
        )
    }

    getVClassesByUser(canViewOtherVClass: boolean): Observable<Vclasse[]> {
        return this.http.get<Vclasse[]>(this.getVclassesByUserUrl + canViewOtherVClass).pipe(
            tap(data => this._serviceLogs.log('getVclassesByUser', data)),
            catchError(this._serviceLogs.handleError('getVClassesByUser', this.getVclassesByUserUrl))
        )
    }

    getAllVClasses(): Observable<Vclasse[]> {
        return this.http.get<Vclasse[]>(this.getAllVClassesUrl).pipe(
            tap(data => this._serviceLogs.log('getAllVClasses', data)),
            catchError(this._serviceLogs.handleError('getAllVClasses', this.getAllVClassesUrl))
        )
    }

    getVClasse(vclasseId: string): Observable<Vclasse> {
        return this.http.get<Vclasse>(this.API_URL + vclasseId).pipe(
            tap(data => this._serviceLogs.log('getVclasse', data)),
            catchError(this._serviceLogs.handleError('startOrStopVMVClass', this.API_URL))
        )
    }

    getVClassState(vClassId: number): Observable<VClassState> {
        return this.http.get<VClassState>(this.stateVClassUrl + vClassId).pipe(
            tap(data => this._serviceLogs.log('getVClassState', data)),
            catchError(this._serviceLogs.handleError('getVClassState', this.stateVClassUrl))
        )
    }

    startOrStopVMVClass(vClassId: number, isStarting: boolean): Observable<any> {
        return this.http.get<any>(this.startStopVMVClassUrl + vClassId + '/' + isStarting).pipe(
            tap(data => this._serviceLogs.log('startOrStopVMVClass', data)),
            catchError(this._serviceLogs.handleError('startOrStopVMVClass', this.startStopVMVClassUrl))
        )
    }
}*/