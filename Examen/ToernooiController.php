<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Toernooi;
use App\Models\User;
use App\Models\Registration;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Exception;

class ToernooiController extends Controller
{
    //Met all methode haal ik alles uit de models dus uit de tabelen en dan passeer ik die values naar de view
    public function index()
    {
        $data = Toernooi::all();
        return view('Toernooi_pagina', ['data'=>$data]);
    }

    // Hier gebruik ik binnen de query een INNER JOIN key word om twee fielden values te koppelen uit verschillende tabelen, dan passeer ik data naar de view.
    public function inschrijvingen()
    {
        $toernooien = DB::select('select * from toernoois INNER JOIN registrations on toernoois.id = registrations.toernooi_id');
        $registrations = Registration::all();
        return view('account/inschrijvingen', ['registrations'=>$registrations, 'toernooien'=>$toernooien]);
    }

    // Simpel functie om een view weer te geven
    public function create()
    {
        return view('create_toernooi');
    }

    // Hier maak ik een string array met alle requirds erin om dat in de validator object te zitten, make method gebruikt twee parameters die zijn de data en de requireds, met if statement check ik of het gelukt is met validator anders geef ik niks terug, als het gelukt is passeer ik de values van inputs into the fielden in de model 
    public function store(Request $request)
    {
        $rules = [
			'input_title' => 'required',
			'input_inschrijfkosten' => 'required',
			'input_players' => 'required',
            'input_plekken' => 'required',
			'input_date' => 'required',
            'input_time' => 'required'
		];
		$validator = Validator::make($request->all(),$rules);
		if ($validator->fails()) {
			return redirect('create_toernooi')
			->withInput()
			->withErrors($validator);
		}
		else{

            $data = $request->input();
            $date_time = (new \DateTime(`$request->input_date : $request->input_time`))->format("y-m-d:H:i");
                try{
                    $toernooi = new Toernooi;
                    $toernooi->title = $data['input_title'];
                    $toernooi->date_time = $date_time;
                    $toernooi->registration_price = $data['input_inschrijfkosten'];
                    $toernooi->number_of_players = $data['input_players'];
                    $toernooi->number_of_available_places = $data['input_plekken'];
                    $toernooi->save();
                    return redirect('/beheer/toernooi')->with('status',"Insert successfully");
                }
                catch(Exception $e){
                    return redirect('create_toernooi')->with('failed',"operation failed");
                }
            }
    }


    // Hier gebruik ik de DB facade om query te bouwen door insert te gebruiken voeg ik values into gekozen fielden, die gegevens worden met de url gestuurd.
    public function register($id, $user_id)
    {
        DB::insert('insert into registrations set toernooi_id = ?,user_id=?',[$id, $user_id]);
        return redirect('account')->with('status',"registered successfully");
    }

    
    // Hier gebruik ik de DB facade om query te bouwen door select te gebruiken selecteer ik alles uit de tabel toernoois, met where bepaal ik welke gegevens ga ik selecteren, hier zijn die gegevens gebaseerd op de id die met de methode wordt gepasseerd
    public function edit($id)
    {
        $data = DB::select('select * from toernoois where id = ?',[$id]);
        return view('edit_toernooi',['data'=>$data]);
    }

    // Request object houdt in alle data van de http request, en zo krijg ik de values van inputs, hier wordt de namen gebruikt van de html objecten.
    public function update(Request $request,$id)
    {
        $input_date_time = (new \DateTime(`$request->input_date : $request->input_time`))->format("y-m-d:H:i");


        $title = $request->input('input_title');
        $date_time = $input_date_time;
        $registration_price = $request->input('input_registration_price');
        $number_of_players = $request->input('input_number_of_players');
        $number_of_available_places = $request->input('input_number_of_available_places');
        
        DB::update('update toernoois set title = ?,date_time=?,registration_price=?,number_of_players=?,number_of_available_places=? where id = ?',[$title, $date_time, $registration_price, $number_of_players, $number_of_available_places ,$id]);
        return redirect('/beheer/toernooi')->with('status',"updated successfully");
        
    }

    // Delete method is om fielden te verwijderen uit een tabel in db
    public function destroy($id)
    {
        try{
            DB::delete('delete from toernoois where id = ?',[$id]);
            return redirect('beheer')->with('status',"deleted successfully");
        }
        catch(Exception $e){
            return redirect('beheer')->with('failed',"operation failed");
        }
    }

    // Delete method is om fielden te verwijderen uit een tabel in db
    public function cancel($id)
    {
        try{
            DB::delete('delete from registrations where id = ?',[$id]);
            return redirect('beheer')->with('status',"deleted successfully");
        }
        catch(Exception $e){
            return redirect('beheer')->with('failed',"operation failed");
        }
    }
}
