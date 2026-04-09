<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    public function index()
    {
        return response()->json(Registration::latest()->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'age_group' => 'required|string|max:50',
            'designation' => 'required|string|max:100',
            'location' => 'required|string|max:255',
            'program' => 'required|string|max:255',
        ]);

        $registration = Registration::create($validated);

        return response()->json([
            'message' => 'Registration successful!',
            'data' => $registration
        ], 201);
    }
}
