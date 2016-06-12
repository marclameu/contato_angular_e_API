<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CriarTabelaOperadoras extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('operadoras', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('codigo');            
            $table->string('categoria'); 
            $table->SoftDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('operadoras');
    }
}
