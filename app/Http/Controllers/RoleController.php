<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::with('permissions')->get();
        return inertia::render('Role/Index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $allPermissions = Permission::all();
        return inertia::render('Role/Create', compact('allPermissions'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name'        => 'required|unique:roles,name',
            'permissions' => 'required',
        ]);

        $role = Role::create([
            'name'        => $request->name,
            'permissions' => $request->permissions,
        ]);

        $role->syncPermissions($request->permissions);

        return redirect()->route('roles.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $role = Role::with('permissions')->findOrFail($id);
       
        return inertia::render('Role/Show', compact('role'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $role  = Role::with('permissions')->findOrFail($id);
        $allPermissions = Permission::all();
        return inertia::render('Role/Edit', compact('role', 'allPermissions'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $request->validate([
            'name'        => 'required|unique:roles,name,' . $id,
            'permissions' => 'required|array',
        ]);

        $role = Role::findOrFail($id);
        $role->update(['name' => $request->name]);

        // Flatten in case the array is nested
        $permissionIds = Arr::flatten($request->permissions);

        // Convert IDs to names for Spatie
        $permissions = Permission::whereIn('id', $permissionIds)->pluck('name');

        $role->syncPermissions($permissions);

        return redirect()->route('roles.index')
            ->with('success', 'Role updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $roleToDelete = Role::find($id);
        $roleToDelete->delete();
        return redirect()->route('roles.index');
    }
}
