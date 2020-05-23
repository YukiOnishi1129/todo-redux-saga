<?php

namespace App\Http\Controllers;

use App\Todo;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/**
 * Apiコントローラ
 */
class ApiController extends Controller
{
    /**
     * Todoデータ全取得
     * 
     * @return array
     */
    public function index()
    {
        $todos = Todo::all();
        return response()->json(['todos' => $todos]);
    }

    /**
     * Todo新規作成
     */
    public function store(Request $request)
    {
        // Log::info('テスト22222');
        $todos = new Todo;
        $todos->title = $request->title;
        $todos->content = $request->content;
        $todos->save();
        return redirect('api/spa/');
    }

    /**
     * 対象のTodo情報を取得
     */
    public function show($id)
    {
        // Log::info('テスト');
        $todo = Todo::find($id);
        return response()->json(['todo' => $todo]);
    }

    /**
     * 対象のTodoを編集
     */
    public function update(Request $request, $id)
    {
        $todo = Todo::find($id);
        $todo->title = $request->title;
        $todo->content = $request->content;
        $todo->save();
        return redirect('api/spa/' . $id);
    }

    /**
     * 対象のTodoを削除
     */
    public function destroy($id)
    {
        $todo = Todo::find($id);
        $todo->delete();
        return redirect('api');
    }
}
