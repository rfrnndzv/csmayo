<?php

namespace App\Http\Controllers;

use App\Models\Amedica;
use App\Models\Anexo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class EnfermeriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reservas = DB::select("SELECT A.nroanexo, A.fecha, A.estado, (SELECT getMedico(A.cimed)) AS medico, C.cipaciente, (SELECT getPaciente(B.nrohc)) AS nom_paciente
                                FROM anexo A, registra B, paciente C
                                WHERE A.nrohc = B.nrohc AND B.cipaciente LIKE C.cipaciente AND DATE_FORMAT(A.fecha,'%y-%m-%d') = DATE_FORMAT(now(),'%y-%m-%d')");

        return view('consulta_medica.index', compact('reservas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Anexo $anexo)
    {
        $amedica = Amedica::find($anexo->nroanexo);

        if(!isset($amedica->hingreso)){
            date_default_timezone_set("America/Caracas");
            $amedica->hingreso = date("H:i");
        }

        return view('consulta_medica.atender', compact('anexo', 'amedica'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Anexo $anexo)
    {
        if($anexo->estado == "espera"){
            $anexo->estado = "en cola";
        }
        $anexo->save();

        $amedica = Amedica::find($anexo->nroanexo);
        $amedica->update($request->all());
        $amedica->cienf = Auth::user()->ciusuario;
        $amedica->save();

        return redirect(route('consulta_medica.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function atender(Request $request){
        //
    }
}