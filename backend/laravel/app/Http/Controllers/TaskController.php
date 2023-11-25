<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskCollection;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Task::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $taskRequest)
    {
        Task::create($taskRequest->all());

        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return response()->json(['success' => true, 'task' => $task]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $task->update($request->all());

        return response()->json(['success' => true]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json(['success' => true]);
    }
}
