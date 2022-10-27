@extends('layout.beheer')

@section('title', 'Page Title')

@section('head')
    @parent

@stop

@section('content')

<div class="container-fluid">

    <h1>Toernooi maken</h1>

    

    <form action="store_toernooi" method="post" enctype='multipart/form-data'>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
        {{ session('status') }}
        </div>
        @elseif(session('failed'))
        <div class="alert alert-danger" role="alert">
        {{ session('failed') }}
        </div>
    @endif

    @if (count($errors) > 0)
         <div class = "alert alert-danger">
            <ul>
               @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
               @endforeach
            </ul>
         </div>
      @endif
      
    @csrf
        <div class="card" style="width: 60%; position: absolute; left: 0; right: 0; margin: auto;">
            <div class="card-body">

                <div class="mb-3">
                    <label for="title" class="form-label">Titel</label>
                    <input type="text" class="form-control" id="input_title" name="input_title" placeholder="Enter a title">
                </div>
                <div class="row">
                <div class="col">
                <div class="mb-3">
                    <label for="date" class="form-label">Kies een datum</label>
                    <input placeholder="Selected date" type="date" id="input_date" name="input_date" class="form-control datepicker">
                </div>
                </div>
                <div class="col">
                <div class="mb-3">
                    <label for="time" class="form-label">Kies een tijd</label>
                    <input placeholder="Selected time" type="time" id="input_time" name="input_time" class="form-control timepicker">
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <div class="mb-3">
                    <label for="players" class="form-label">Aantal spelers</label>
                    <input class="form-control" placeholder="Enter number of players" type="text" name="input_players" id="input_players">
                </div>
                </div>
                <div class="col">
                <div class="mb-3">
                    <label for="plekken" class="form-label">Beschikbare plekken</label>
                    <input class="form-control" placeholder="Enter available places" type="text" name="input_plekken" id="input_plekken">
                </div>
                </div>
                </div>
                <div class="mb-3">
                    <label for="inschrijfkosten" class="form-label">Inschrijfkosten</label>
                    <input class="form-control" placeholder="Enter costs" type="text" name="input_inschrijfkosten" id="input_inschrijfkosten">
                </div>

                <button type="submit" class="btn btn-primary w-50">Maken</button>
            </div>
        </div>
    </form>
</div>
@stop