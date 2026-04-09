<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $attribute) {
            $attribute->id();
            $attribute->string('full_name');
            $attribute->string('phone_number');
            $attribute->string('email');
            $attribute->string('age_group');
            $attribute->string('designation');
            $attribute->string('location');
            $attribute->string('program');
            $attribute->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
