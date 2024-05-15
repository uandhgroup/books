---
id: laravel-cheat-sheet
title: Laravel Cheat Sheet
sidebar_label: Laravel Cheat Sheet
sidebar_position: 3
---

# Laravel Cheat Sheet
A cheat sheet for Laravel commands

#### Artisan  ####
```
// Displays help for a given command
php artisan --help OR -h
```

```
// Do not output any message
php artisan --quiet OR -q
```

```
// Display this application version
php artisan --version OR -V
```

```
// Do not ask any interactive question
php artisan --no-interaction OR -n
```

```
// Force ANSI output
php artisan --ansi
```

```
// Disable ANSI output
php artisan --no-ansi
```

```
// The environment the command should run under
php artisan --env
```

```
// -v|vv|vvv Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug
php artisan --verbose
```

```
// Display the framework change list
php artisan changes
```

```
// Remove the compiled class file
php artisan clear-compiled
```
```
// Put the application into maintenance mode
php artisan down
```

```
// Regenerate framework autoload files
php artisan dump-autoload
```

```
// Display the current framework environment
php artisan env
```

```
// Displays help for a command
php artisan help
```
```
// Lists commands
php artisan list
```
```
// Optimize the framework for better performance
php artisan optimize
```

```
// List all registered routes
php artisan routes
```

```
// Serve the application on the PHP development server
php artisan serve
```

```
// Change the default port
php artisan serve --port 8080
```

```
// Get it to work outside localhost
php artisan serve --host 0.0.0.0
```

```
// Interact with your application
php artisan tinker
```

```
// Bring the application out of maintenance mode
php artisan up
```

```
// Create a new package workbench
php artisan workbench
```

```
// Publish a package's assets to the public directory
php artisan asset:publish [--bench[="vendor/package"]] [--path[="..."]] [package]
```

```
// Create a migration for the password reminders table
php artisan auth:reminders-table
```

```
// Flush the application cache
php artisan cache:clear
```

```
// Create a new Artisan command (L3:task)
php artisan command:make name [--command[="..."]] [--path[="..."]] [--namespace[="..."]]
```

```
// Publish a package's configuration to the application
php artisan config:publish
```

```
// Create a new resourceful controller
php artisan controller:make [--bench="vendor/package"]
```

```
// Seed the database with records
php artisan db:seed [--class[="..."]] [--database[="..."]]
```

```
// Set the application key
php artisan key:generate
```

```
// Database migrations
php artisan migrate [--bench="vendor/package"] [--database[="..."]] [--path[="..."]] [--package[="..."]] [--pretend] [--seed]
```

```
// Create the migration repository
php artisan migrate:install [--database[="..."]]
```
```
// Create a new migration file
php artisan migrate:make name [--bench="vendor/package"] [--create] [--package[="..."]] [--path[="..."]] [--table[="..."]]
```
```
// Reset and re-run all migrations
php artisan migrate:refresh [--database[="..."]] [--seed]
```

```
// Rollback all database migrations
php artisan migrate:reset [--database[="..."]] [--pretend]
```

```
// Rollback the last database migration
php artisan migrate:rollback [--database[="..."]] [--pretend]
```

```
// Publish a package's migrations to migration directory
php artisan migrate:publish vendor/package
```

```
// Listen to a given queue
php artisan queue:listen [--queue[="..."]] [--delay[="..."]] [--memory[="..."]] [--timeout[="..."]] [connection]
```

```
// Subscribe a URL to an Iron.io push queue
php artisan queue:subscribe [--type[="..."]] queue url
```

```
// Process the next job on a queue
php artisan queue:work [--queue[="..."]] [--delay[="..."]] [--memory[="..."]] [--sleep] [connection]
```

```
// Create a migration for the session database table
php artisan session:table
```

```
// Publish a package's views to the application
php artisan view:publish [--path[="..."]] package
```

```
php artisan tail [--path[="..."]] [--lines[="..."]] [connection]
```                

#### Composer  ####
```
composer create-project laravel/laravel folder_name
composer install
composer update
composer dump-autoload [--optimize]
composer self-update
```                
#### Configuration  ####
```
Config::get('app.timezone');
//get with Default value
 Config::get('app.timezone', 'UTC');
//set Configuration
 Config::set('database.default', 'sqlite');
                
#### Routing  ####
Route::get('foo', function(){});
Route::get('foo', 'ControllerName@function');
Route::controller('foo', 'FooController');
                
#### RESTful Controllers  ####
Route::resource('posts','PostsController');
//Specify a subset of actions to handle on the route
 Route::resource('photo', 'PhotoController',['only' => ['index', 'show']]);
Route::resource('photo', 'PhotoController',['except' => ['update', 'destroy']]);
                
#### Triggering Errors  ####
App::abort(404);
App::missing(function($exception){});
throw new NotFoundHttpException;
                
#### Route Parameters  ####
Route::get('foo/{bar}', function($bar){});
Route::get('foo/{bar?}', function($bar = 'bar'){});
                
```
#### HTTP Verbs  ####
```
Route::any('foo', function(){});
Route::post('foo', function(){});
Route::put('foo', function(){});
Route::patch('foo', function(){});
Route::delete('foo', function(){});
// RESTful actions
 Route::resource('foo', 'FooController');
                
Secure Routes
Route::get('foo', array('https', function(){}));
Route Constraints
Route::get('foo/{bar}', function($bar){})
	->where('bar', '[0-9]+');
Route::get('foo/{bar}/{baz}', function($bar, $baz){})
	->where(array('bar' => '[0-9]+', 'baz' => '[A-Za-z]'))
                
// Set a pattern to be used across routes
 Route::pattern('bar', '[0-9]+')
                
Filters
// Declare an auth filter
 Route::filter('auth', function(){});
// Register a class as a filter
 Route::filter('foo', 'FooFilter');
Route::get('foo', array('before' => 'auth', function(){}));
// Routes in this group are guarded by the 'auth' filter
 Route::get('foo', array('before' => 'auth', function(){}));
Route::group(array('before' => 'auth'), function(){});
// Pattern filter
 Route::when('foo/*', 'foo');
// HTTP verb pattern
 Route::when('foo/*', 'foo', array('post'));
                
Named Routes
Route::currentRouteName();
Route::get('foo/bar', array('as' => 'foobar', function(){}));
                
Route Prefixing
// This route group will carry the prefix 'foo'
 Route::group(array('prefix' => 'foo'), function(){})
                
Route Namespacing
// This route group will carry the namespace 'Foo\Bar'
 Route::group(array('namespace' => 'Foo\Bar'), function(){})
                
Sub-Domain Routing
// {sub} will be passed to the closure
 Route::group(array('domain' => '{sub}.example.com'), function(){});
```                
#### App  ####
```
App::environment();
// test equal to
 App::environment('local');
App::runningInConsole();
App::runningUnitTests();
```                

#### Log  ####
```
Log::info('info');
Log::info('info',array('context'=>'additional info'));
Log::error('error');
Log::warning('warning');
// get monolog instance
 Log::getMonolog();
// add listener
 Log::listen(function($level, $message, $context) {});
// get all ran queries.
DB::getQueryLog();
```                
#### URLs  ####
```
URL::full();
URL::current();
URL::previous();
URL::to('foo/bar', $parameters, $secure);
URL::action('FooController@method', $parameters, $absolute);
URL::route('foo', $parameters, $absolute);
URL::secure('foo/bar', $parameters);
URL::asset('css/foo.css', $secure);
URL::secureAsset('css/foo.css');
URL::isValidUrl('http://example.com');
URL::getRequest();
URL::setRequest($request);
URL::getGenerator();
URL::setGenerator($generator);
```                
#### Events  ####
```
Event::fire('foo.bar', array($bar));
Event::listen('foo.bar', function($bar){});
Event::listen('foo.*', function($bar){});
Event::listen('foo.bar', 'FooHandler', 10);
Event::listen('foo.bar', 'BarHandler', 5);
Event::listen('foor.bar', function($event){ return false; });
Event::queue('foo', array($bar));
Event::flusher('foo', function($bar){});
Event::flush('foo');
Event::forget('foo');
Event::subscribe(new FooEventHandler);
```                
#### Database  ####
```
DB::connection('connection_name');
DB::statement('drop table users');
DB::listen(function($sql, $bindings, $time){ code_here; });
DB::transaction(function(){ transaction_code_here; });
// Cache a query for $time minutes
DB::table('users')->remember($time)->get();
// Escape raw input
DB::raw('sql expression here');
```                
#### Selects  ####
```
DB::table('name')->get();
DB::table('name')->distinct()->get();
DB::table('name')->select('column as column_alias')->get();
DB::table('name')->where('name', '=', 'John')->get();
DB::table('name')->whereBetween('column', array(1, 100))->get();
DB::table('name')->orWhereBetween('column', array(200, 300))->get();
DB::table('name')->whereIn('column', array(1, 2, 3))->get();
DB::table('name')->whereNotIn('column', array(1, 2, 3))->get();
DB::table('name')->whereNull('column')->get();
DB::table('name')->whereNotNull('column')->get();
DB::table('name')->groupBy('column')->get();
// Default Eloquent sort is ascendant
DB::table('name')->orderBy('column')->get();
DB::table('name')->orderBy('column','desc')->get();
DB::table('name')->having('count', '>', 100)->get();
DB::table('name')->skip(10)->take(5)->get();
DB::table('name')->first();
DB::table('name')->pluck('column');
DB::table('name')->lists('column');
// Joins
DB::table('name')->join('table', 'name.id', '=', 'table.id')
    ->select('name.id', 'table.email');
                
Inserts, Updates, Deletes
DB::table('name')->insert(array('name' => 'John', 'email' => 'john@example.com'));
DB::table('name')->insertGetId(array('name' => 'John', 'email' => 'john@example.com'));
// Batch insert
DB::table('name')->insert(array(
	array('name' => 'John', 'email' => 'john@example.com'),
	array('name' => 'James', 'email' => 'james@example.com')
));
// Update an entry
DB::table('name')->where('name', '=', 'John')
	->update(array('email' => 'john@example2.com'));
// Delete everything from a table
DB::table('name')->delete();
// Delete specific records
DB::table('name')->where('id', '>', '10')->delete();
DB::table('name')->truncate();
```             
#### Aggregates ####
```
DB::table('name')->count();
DB::table('name')->max('column');
DB::table('name')->min('column');
DB::table('name')->avg('column');
DB::table('name')->sum('column');
DB::table('name')->increment('column');
DB::table('name')->increment('column', $amount);
DB::table('name')->decrement('column');
DB::table('name')->decrement('column', $amount);
DB::table('name')->remember(5)->get();
DB::table('name')->remember(5, 'cache-key-name')->get();
DB::table('name')->cacheTags('my-key')->remember(5)->get();
DB::table('name')->cacheTags(array('my-first-key','my-second-key'))->remember(5)->get();
```                
#### Raw Expressions ####
```
// return rows
DB::select('select * from users where id = ?', array('value'));
// return nr affected rows
DB::insert('insert into foo set bar=2');
DB::update('update foo set bar=2');
DB::delete('delete from bar');
// returns void
DB::statement('update foo set bar=2');
// raw expression inside a statement
DB::table('name')->select(DB::raw('count(*) as count, column2'))->get();
```                

#### Eloquent ####
```
Model::create(array('key' => 'value'));
// Find first matching record by attributes or create
 Model::firstOrCreate(array('key' => 'value'));
// Find first record by attributes or instantiate
 Model::firstOrNew(array('key' => 'value'));
// Create or update a record matching attibutes, and fill with values
 Model::updateOrCreate(array('search_key' => 'search_value'), array('key' => 'value'));
// Fill a model with an array of attributes, beware of mass assignment!
 Model::fill($attributes);
Model::destroy(1);
Model::all();
Model::find(1);
// Find using dual primary key
 Model::find(array('first', 'last'));
// Throw an exception if the lookup fails
 Model::findOrFail(1);
// Find using dual primary key and throw exception if the lookup fails
 Model::findOrFail(array('first', 'last'));
Model::where('foo', '=', 'bar')->get();
Model::where('foo', '=', 'bar')->first();
// Find using relations
 Model::whereHas('relation')->get();
Model::with('relation')->where('relation.foo', 'bar')->get();
// dynamic
 Model::whereFoo('bar')->first();
// Throw an exception if the lookup fails
 Model::where('foo', '=', 'bar')->firstOrFail();
Model::where('foo', '=', 'bar')->count();
Model::where('foo', '=', 'bar')->delete();
//Output raw query
 Model::where('foo', '=', 'bar')->toSql();
Model::whereRaw('foo = bar and cars = 2', array(20))->get();
Model::remember(5)->get();
Model::remember(5, 'cache-key-name')->get();
Model::cacheTags('my-tag')->remember(5)->get();
Model::cacheTags(array('my-first-key','my-second-key'))->remember(5)->get();
Model::on('connection-name')->find(1);
Model::with('relation')->get();
Model::all()->take(10);
Model::all()->skip(10);
// Default Eloquent sort is ascendant
 Model::orderBy('column')->get();
Model::orderBy('column','desc')->get();             
```

#### Soft Delete ####
```
Model::withTrashed()->where('cars', 2)->get();
// Include the soft deleted models in the results
 Model::withTrashed()->where('cars', 2)->restore();
Model::where('cars', 2)->forceDelete();
// Force the result set to only included soft deletes
 Model::onlyTrashed()->where('cars', 2)->get();
```

#### Events ####
```
Model::creating(function($model){});
Model::created(function($model){});
Model::updating(function($model){});
Model::updated(function($model){});
Model::saving(function($model){});
Model::saved(function($model){});
Model::deleting(function($model){});
Model::deleted(function($model){});
Model::observe(new FooObserver);
```

#### Eloquent Configuration  ####
```
// Disables mass assignment exceptions from being thrown from model inserts and updates
 Eloquent::unguard();
// Renables any ability to throw mass assignment exceptions
 Eloquent::reguard();
```                

#### Pagination  ####
```
// Auto-Magic Pagination
 Model::paginate(15);
Model::where('cars', 2)->paginate(15);
// "Next" and "Previous" only
 Model::where('cars', 2)->simplePaginate(15);
// Manual Paginator
 Paginator::make($items, $totalItems, $perPage);
// Print page navigators in view
$variable->links();
```                
#### Schema  ####
```
// Indicate that the table needs to be created
 Schema::create('table', function($table)
{
    $table->increments('id');
});
// Specify a Connection
 Schema::connection('foo')->create('table', function($table){});
// Rename the table to a given name
 Schema::rename($from, $to);
// Indicate that the table should be dropped
 Schema::drop('table');
// Indicate that the table should be dropped if it exists
 Schema::dropIfExists('table');
// Determine if the given table exists
 Schema::hasTable('table');
// Determine if the given table has a given column
 Schema::hasColumn('table', 'column');
// Update an existing table
 Schema::table('table', function($table){});
// Indicate that the given columns should be renamed
$table->renameColumn('from', 'to');
// Indicate that the given columns should be dropped
$table->dropColumn(string|array);
// The storage engine that should be used for the table
$table->engine = 'InnoDB';
// Only work on MySQL
$table->string('name')->after('email');
```                
#### Indexes  ####
```
$table->string('column')->unique();
$table->primary('column');
// Creates a dual primary key
$table->primary(array('first', 'last'));
$table->unique('column');
$table->unique('column', 'key_name');
// Creates a dual unique index
$table->unique(array('first', 'last'));
$table->unique(array('first', 'last'), 'key_name');
$table->index('column');
$table->index('column', 'key_name');
// Creates a dual index
$table->index(array('first', 'last'));
$table->index(array('first', 'last'), 'key_name');
$table->dropPrimary('table_column_primary');
$table->dropUnique('table_column_unique');
$table->dropIndex('table_column_index');
```                
#### Foreign Keys  ####
```
$table->foreign('user_id')->references('id')->on('users');
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'|'restrict'|'set null'|'no action');
$table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade'|'restrict'|'set null'|'no action');
$table->dropForeign('posts_user_id_foreign');
```                
#### Column Types  ####
```
// Increments
$table->increments('id');
$table->bigIncrements('id');

// Numbers
$table->integer('votes');
$table->tinyInteger('votes');
$table->smallInteger('votes');
$table->mediumInteger('votes');
$table->bigInteger('votes');
$table->float('amount');
$table->double('column', 15, 8);
$table->decimal('amount', 5, 2);

//String and Text
$table->char('name', 4);
$table->string('email');
$table->string('name', 100);
$table->text('description');
$table->mediumText('description');
$table->longText('description');

//Date and Time
$table->date('created_at');
$table->dateTime('created_at');
$table->time('sunrise');
$table->timestamp('added_on');
// Adds created_at and updated_at columns
$table->timestamps();
$table->nullableTimestamps();

// Others
$table->json('options');
$table->jsonb('options');
$table->binary('data');
$table->boolean('confirmed');
// Adds deleted_at column for soft deletes
$table->softDeletes();
$table->enum('choices', array('foo', 'bar'));
// Adds remember_token as VARCHAR(100) NULL
$table->rememberToken();
// Adds INTEGER parent_id and STRING parent_type
$table->morphs('parent');
->nullable()
->default($value)
->unsigned()
```                
#### Input  ####
```
Input::get('key');
// Default if the key is missing
 Input::get('key', 'default');
Input::has('key');
Input::all();
// Only retrieve 'foo' and 'bar' when getting input
 Input::only('foo', 'bar');
// Disregard 'foo' when getting input
 Input::except('foo');
Input::flush();
                
Session Input (flash)
// Flash input to the session
 Input::flash();
// Flash only some of the input to the session
 Input::flashOnly('foo', 'bar');
// Flash only some of the input to the session
 Input::flashExcept('foo', 'baz');
// Retrieve an old input item
 Input::old('key','default_value');
```

#### Files  ####
```
// Use a file that's been uploaded
 Input::file('filename');
// Determine if a file was uploaded
 Input::hasFile('filename');
// Access file properties
 Input::file('name')->getRealPath();
Input::file('name')->getClientOriginalName();
Input::file('name')->getClientOriginalExtension();
Input::file('name')->getSize();
Input::file('name')->getMimeType();
// Move an uploaded file
 Input::file('name')->move($destinationPath);
// Move an uploaded file
 Input::file('name')->move($destinationPath, $fileName);
```                
#### Cache  ####
```
Cache::put('key', 'value', $minutes);
Cache::add('key', 'value', $minutes);
Cache::forever('key', 'value');
Cache::remember('key', $minutes, function(){ return 'value' });
Cache::rememberForever('key', function(){ return 'value' });
Cache::forget('key');
Cache::has('key');
Cache::get('key');
Cache::get('key', 'default');
Cache::get('key', function(){ return 'default'; });
Cache::tags('my-tag')->put('key','value', $minutes);
Cache::tags('my-tag')->has('key');
Cache::tags('my-tag')->get('key');
Cache::tags('my-tag')->forget('key');
Cache::tags('my-tag')->flush();
Cache::increment('key');
Cache::increment('key', $amount);
Cache::decrement('key');
Cache::decrement('key', $amount);
Cache::section('group')->put('key', $value);
Cache::section('group')->get('key');
Cache::section('group')->flush();
```                
Cookies 
```
Cookie::get('key');
Cookie::get('key', 'default');
// Create a cookie that lasts for ever
 Cookie::forever('key', 'value');
// Create a cookie that lasts N minutes
 Cookie::make('key', 'value', 'minutes');
// Set a cookie before a response has been created
 Cookie::queue('key', 'value', 'minutes');
// Forget cookie
 Cookie::forget('key');
// Send a cookie with a response
$response = Response::make('Hello World');
// Add a cookie to the response
$response->withCookie(Cookie::make('name', 'value', $minutes));
```                
Sessions 
```
Session::get('key');
// Returns an item from the session
 Session::get('key', 'default');
Session::get('key', function(){ return 'default'; });
// Get the session ID
 Session::getId();
// Put a key / value pair in the session
 Session::put('key', 'value');
// Push a value into an array in the session
 Session::push('foo.bar','value');
// Returns all items from the session
 Session::all();
// Checks if an item is defined
 Session::has('key');
// Remove an item from the session
 Session::forget('key');
// Remove all of the items from the session
 Session::flush();
// Generate a new session identifier
 Session::regenerate();
// Flash a key / value pair to the session
 Session::flash('key', 'value');
// Reflash all of the session flash data
 Session::reflash();
// Reflash a subset of the current flash data
 Session::keep(array('key1', 'key2'));
```                
Requests 
```
// url: http://xx.com/aa/bb
 Request::url();
// path: /aa/bb
 Request::path();
// getRequestUri: /aa/bb/?c=d
 Request::getRequestUri();
// Returns user's IP
 Request::getClientIp();
// getUri: http://xx.com/aa/bb/?c=d
 Request::getUri();
// getQueryString: c=d
 Request::getQueryString();
// Get the port scheme of the request (e.g., 80, 443, etc.)
 Request::getPort();
// Determine if the current request URI matches a pattern
 Request::is('foo/*');
// Get a segment from the URI (1 based index)
 Request::segment(1);
// Retrieve a header from the request
 Request::header('Content-Type');
// Retrieve a server variable from the request
 Request::server('PATH_INFO');
// Determine if the request is the result of an AJAX call
 Request::ajax();
// Determine if the request is over HTTPS
 Request::secure();
// Get the request method
 Request::method();
// Checks if the request method is of specified type
 Request::isMethod('post');
// Get raw POST data
 Request::instance()->getContent();
// Get requested response format
 Request::format();
// true if HTTP Content-Type header contains */json
 Request::isJson();
// true if HTTP Accept header is application/json
 Request::wantsJson();
```
#### Responses  ####                
 
```
return Response::make($contents);
return Response::make($contents, 200);
return Response::json(array('key' => 'value'));
return Response::json(array('key' => 'value'))
	->setCallback(Input::get('callback'));
return Response::download($filepath);
return Response::download($filepath, $filename, $headers);
// Create a response and modify a header value
$response = Response::make($contents, 200);
$response->header('Content-Type', 'application/json');
return $response;
// Attach a cookie to a response
 return Response::make($content)
	->withCookie(Cookie::make('key', 'value'));
```                

#### Redirects  ####   
```
return Redirect::to('foo/bar');
return Redirect::to('foo/bar')->with('key', 'value');
return Redirect::to('foo/bar')->withInput(Input::get());
return Redirect::to('foo/bar')->withInput(Input::except('password'));
return Redirect::to('foo/bar')->withErrors($validator);
// Create a new redirect response to the previous location
 return Redirect::back();
// Create a new redirect response to a named route
 return Redirect::route('foobar');
return Redirect::route('foobar', array('value'));
return Redirect::route('foobar', array('key' => 'value'));
// Create a new redirect response to a controller action
 return Redirect::action('FooController@index');
return Redirect::action('FooController@baz', array('value'));
return Redirect::action('FooController@baz', array('key' => 'value'));
// If intended redirect is not defined, defaults to foo/bar.
 return Redirect::intended('foo/bar');
```                

#### IoC  ####
```
App::bind('foo', function($app){ return new Foo; });
App::make('foo');
// If this class exists, it's returned
 App::make('FooBar');
// Register a shared binding in the container
 App::singleton('foo', function(){ return new Foo; });
// Register an existing instance as shared in the container
 App::instance('foo', new Foo);
// Register a binding with the container
 App::bind('FooRepositoryInterface', 'BarRepository');
// Register a service provider with the application
 App::register('FooServiceProvider');
// Listen for object resolution
 App::resolving(function($object){});
```                
 
#### Security  ####
```
Passwords
Hash::make('secretpassword');
Hash::check('secretpassword', $hashedPassword);
Hash::needsRehash($hashedPassword);
                
Auth
// Determine if the current user is authenticated
 Auth::check();
// Get the currently authenticated user
 Auth::user();
// Get the ID of the currently authenticated user
 Auth::id();
// Attempt to authenticate a user using the given credentials
 Auth::attempt(array('email' => $email, 'password' => $password));
// 'Remember me' by passing true to Auth::attempt()
 Auth::attempt($credentials, true);
// Log in for a single request
 Auth::once($credentials);
// Log a user into the application
 Auth::login(User::find(1));
// Log the given user ID into the application
 Auth::loginUsingId(1);
// Log the user out of the application
 Auth::logout();
// Validate a user's credentials
 Auth::validate($credentials);
// Attempt to authenticate using HTTP Basic Auth
 Auth::basic('username');
// Perform a stateless HTTP Basic login attempt
 Auth::onceBasic();
// Send a password reminder to a user
 Password::remind($credentials, function($message, $user){});
```                

#### Encryption  ####
```
Crypt::encrypt('secretstring');
Crypt::decrypt($encryptedString);
Crypt::setMode('ctr');
Crypt::setCipher($cipher);
```                

#### Mail  ####
```
Mail::send('email.view', $data, function($message){});
Mail::send(array('html.view', 'text.view'), $data, $callback);
Mail::queue('email.view', $data, function($message){});
Mail::queueOn('queue-name', 'email.view', $data, $callback);
Mail::later(5, 'email.view', $data, function($message){});
// Write all email to logs instead of sending
 Mail::pretend();
```                

#### Messages  ####
```
// These can be used on the $message instance passed into Mail::send() or Mail::queue()
$message->from('email@example.com', 'Mr. Example');
$message->sender('email@example.com', 'Mr. Example');
$message->returnPath('email@example.com');
$message->to('email@example.com', 'Mr. Example');
$message->cc('email@example.com', 'Mr. Example');
$message->bcc('email@example.com', 'Mr. Example');
$message->replyTo('email@example.com', 'Mr. Example');
$message->subject('Welcome to the Jungle');
$message->priority(2);
$message->attach('foo\bar.txt', $options);
// This uses in-memory data as attachments
$message->attachData('bar', 'Data Name', $options);
// Embed a file in the message and get the CID
$message->embed('foo\bar.txt');
$message->embedData('foo', 'Data Name', $options);
// Get the underlying Swift Message instance
$message->getSwiftMessage();
```                

#### Queues  ####
```
Queue::push('SendMail', array('message' => $message));
Queue::push('SendEmail@send', array('message' => $message));
Queue::push(function($job) use $id {});
// Same payload to multiple workers
 Queue::bulk(array('SendEmail', 'NotifyUser'), $payload);
// Starting the queue listener
php artisan queue:listen
php artisan queue:listen connection
php artisan queue:listen --timeout=60
// Process only the first job on the queue
php artisan queue:work
// Start a queue worker in daemon mode
php artisan queue:work --daemon
// Create migration file for failed jobs
php artisan queue:failed-table
// Listing failed jobs
php artisan queue:failed
// Delete failed job by id
php artisan queue:forget 5
// Delete all failed jobs
php artisan queue:flush
```                

#### Validation  ####
```
Validator::make(
	array('key' => 'Foo'),
	array('key' => 'required|in:Foo')
);
Validator::extend('foo', function($attribute, $value, $params){});
Validator::extend('foo', 'FooValidator@validate');
Validator::resolver(function($translator, $data, $rules, $msgs)
{
	return new FooValidator($translator, $data, $rules, $msgs);
});
```                

```php
/********************************************************************************************
 * CLI AVAILABLE COMMANDS FOR ARTISAN
 * https://laravel.com/docs/5.8/artisan
 ********************************************************************************************/

// MAIN.

php artisan clear-compiled       // Remove the compiled class file
php artisan db                   // Start a new database CLI session
php artisan docs                 // Access the Laravel documentation
php artisan down                 // Put the application into maintenance mode
php artisan dump-server          // Start the dump server to collect dump information.
php artisan env                  // Display the current framework environment
php artisan help                 // Displays help for a command
php artisan inspire              // Display an inspiring quote
php artisan list                 // Lists commands
php artisan migrate              // Run the database migrations
php artisan optimize             // Cache the framework bootstrap files
php artisan preset               // Swap the front-end scaffolding for the application
php artisan serve                // Serve the application on the PHP development server
php artisan tinker               // Interact with your application
php artisan up                   // Bring the application out of maintenance mode

// APP.

php artisan app:name             // Set the application namespace

// AUTH

php artisan auth:clear-resets    // Flush expired password reset tokens

// CACHE

php artisan cache:clear          // Flush the application cache
php artisan cache:forget         // Remove an item from the cache
php artisan cache:table          // Create a migration for the cache database table
 
// CONFIG

php artisan config:cache         // Create a cache file for faster configuration loading
php artisan config:clear         // Remove the configuration cache file
 
// DB

php artisan db:seed              // Seed the database with records
php artisan db:show              // Display information about the given database
php artisan db:table             // Display information about the given database table
php artisan db:wipe              // Drop all tables, views, and types

// EVENT

php artisan event:generate       // Generate the missing events and listeners based on registration

// KEY

php artisan key:generate         // Set the application key

// MAKE

php artisan make:cast            // Create a new custom Eloquent cast class
php artisan make:channel         // Create a new channel class
php artisan make:command         // Create a new Artisan command
php artisan make:component       // Create a new view component class
php artisan make:controller      // Create a new controller class
php artisan make:event           // Create a new event class
php artisan make:exception       // Create a new custom exception class
php artisan make:factory         // Create a new model factory
php artisan make:job             // Create a new job class
php artisan make:listener        // Create a new event listener class
php artisan make:mail            // Create a new email class
php artisan make:middleware      // Create a new middleware class
php artisan make:migration       // Create a new migration file
php artisan make:model           // Create a new Eloquent model class
php artisan make:notification    // Create a new notification class
php artisan make:observer        // Create a new observer class
php artisan make:policy          // Create a new policy class
php artisan make:provider        // Create a new service provider class
php artisan make:request         // Create a new form request class
php artisan make:resource        // Create a new resource
php artisan make:rule            // Create a new validation rule
php artisan make:scope           // Create a new scope class
php artisan make:seeder          // Create a new seeder class
php artisan make:test            // Create a new test class

// MIGRATE

php artisan migrate:fresh        // Drop all tables and re-run all migrations
php artisan migrate:install      // Create the migration repository
php artisan migrate:refresh      // Reset and re-run all migrations
php artisan migrate:reset        // Rollback all database migrations
php artisan migrate:rollback     // Rollback the last database migration
php artisan migrate:status       // Show the status of each migration

// MODEL
php artisan model:prune          // Prune models that are no longer needed
php artisan model:show           // Show information about an Eloquent model

// NOTIFICATIONS

php artisan notifications:table  // Create a migration for the notifications table

// OPTIMIZE

php artisan optimize:clear       // Remove the cached bootstrap files

// PACKAGE

php artisan package:discover     // Rebuild the cached package manifest

// QUEUE

php artisan queue:batches-table  // Create a migration for the batches database table
php artisan queue:clear          // Delete all of the jobs from the specified queue
php artisan queue:failed         // List all of the failed queue jobs
php artisan queue:failed-table   // Create a migration for the failed queue jobs database table
php artisan queue:flush          // Flush all of the failed queue jobs
php artisan queue:forget         // Delete a failed queue job
php artisan queue:listen         // Listen to a given queue
php artisan queue:monitor        // Monitor the size of the specified queues
php artisan queue:prune-batches  // Prune stale entries from the batches database
php artisan queue:prune-failed   // Prune stale entries from the failed jobs table
php artisan queue:restart        // Restart queue worker daemons after their current job
php artisan queue:retry          // Retry a failed queue job
php artisan queue:retry-batch    // Retry the failed jobs for a batch
php artisan queue:table          // Create a migration for the queue jobs database table
php artisan queue:work           // Start processing jobs on the queue as a daemon

// ROUTE

php artisan route:cache          // Create a route cache file for faster route registration
php artisan route:clear          // Remove the route cache file
php artisan route:list           // List all registered routes

// SAIL

php artisan sail:install         // Install Laravel Sail's default Docker Compose file
php artisan sail:publish         // Publish the Laravel Sail Docker files

// SANCTUM

php artisan sanctum:prune-expired // Prune tokens expired for more than specified number of hours.

// SCHEDULE

php artisan schedule:clear-cache  // Delete the cached mutex files created by scheduler
php artisan schedule:list         // List the scheduled commands
php artisan schedule:run          // Run the scheduled commands
php artisan schedule:test         // Run a scheduled command
php artisan schedule:work         // Start the schedule worker

// SCHEMA

php artisan schema:dump           // Dump the given database schema

// SESSION

php artisan session:table        // Create a migration for the session database table

// STORAGE

php artisan storage:link         // Create a symbolic link from "public/storage" to "storage/app/public"

// STUD

php artisan stub:publish         // Publish all stubs that are available for customization

// VENDOR

php artisan vendor:publish       // Publish any publishable assets from vendor packages

// VIEW

php artisan view:cache           // Compile all of the application's Blade templates
php artisan view:clear           // Clear all compiled view files

/********************************************************************************************
 * REQUEST
 * https://laravel.com/api/5.8/Illuminate/Http/Request.html
 * https://laravel.com/docs/5.8/requests
 ********************************************************************************************/



/********************************************************************************************
 * RESPONSE
 * https://laravel.com/api/5.8/Illuminate/Http/Response.html
 * https://laravel.com/docs/5.8/responses
 ********************************************************************************************/



/********************************************************************************************
 * ROUTING
 * https://laravel.com/docs/5.8/routing
 ********************************************************************************************/



 /********************************************************************************************
 * MIDDLEWARE
 * https://laravel.com/docs/5.8/middleware
 ********************************************************************************************/


/********************************************************************************************
 * CONTROLLERS
 * https://laravel.com/docs/5.8/controllers
 ********************************************************************************************/



/********************************************************************************************
 * SESSION
 * https://laravel.com/docs/5.8/session
 ********************************************************************************************/



/********************************************************************************************
 * URL GENERATION
 * https://laravel.com/docs/5.8/urls
 ********************************************************************************************/



/********************************************************************************************
 * VALIDATION
 * https://laravel.com/docs/5.8/validation
 ********************************************************************************************/

accepted                               // The field under validation must be yes, on, 1, or true.
active_url                             // The field under validation must have a valid A or AAAA record according to the dns_get_record PHP function.
after:date                             // The field under validation must be a value after a given date.
after_or_equal:date                    // The field under validation must be a value after or equal to the given date.
alpha                                  // The field under validation must be entirely alphabetic characters.
alpha_dash                             // The field under validation may have alpha-numeric characters, as well as dashes and underscores.
alpha_num                              // The field under validation must be entirely alpha-numeric characters.
array                                  // The field under validation must be a PHP array.
bail                                   // Stop running validation rules after the first validation failure.
before:date                            // The field under validation must be a value preceding the given date.
before_or_equal:date                   // The field under validation must be a value preceding or equal to the given date.
between:min,max                        // The field under validation must have a size between the given min and max.
boolean                                // The field under validation must be able to be cast as a boolean. Accepted input are true, false, 1, 0, "1", and "0".
confirmed                              // The field under validation must have a matching field of foo_confirmation.
date                                   // The field under validation must be a valid, non-relative date according to the strtotime PHP function.
date_equals:date                       // The field under validation must be equal to the given date.
date_format:format                     // The field under validation must match the given format.
different:field                        // The field under validation must have a different value than field.
digits:value                           // The field under validation must be numeric and must have an exact length of value.
digits_between:min,max                 // The field under validation must have a length between the given min and max.
dimensions                             // The file under validation must be an image meeting the dimension constraints as specified by the rule's parameters.
distinct                               // When working with arrays, the field under validation must not have any duplicate values.
email                                  // The field under validation must be formatted as an e-mail address.
ends_with:foo,bar,...                  // The field under validation must end with one of the given values.
exists:table,column                    // The field under validation must exist on a given database table.
file                                   // The field under validation must be a successfully uploaded file.
filled                                 // The field under validation must not be empty when it is present.
gt:field                               // The field under validation must be greater than the given field.
gte:field                              // The field under validation must be greater than or equal to the given field.
image                                  // The file under validation must be an image (jpeg, png, bmp, gif, svg, or webp)
in:foo,bar,...                         // The field under validation must be included in the given list of values.
in_array:anotherfield.*                // The field under validation must exist in anotherfield's values.
integer                                // The field under validation must be an integer.
ip                                     // The field under validation must be an IP address.
ipv4                                   // The field under validation must be an IPv4 address.
ipv6                                   // The field under validation must be an IPv6 address.
json                                   // The field under validation must be a valid JSON string.
lt:field                               // The field under validation must be less than the given field.
lte:field                              // The field under validation must be less than or equal to the given field.
max:value                              // The field under validation must be less than or equal to a maximum value.
mimetypes:text/plain,...               // The file under validation must match one of the given MIME types:
mimes:foo,bar,...                      // The file under validation must have a MIME type corresponding to one of the listed extensions.
min:value                              // The field under validation must have a minimum value.
not_in:foo,bar,...                     // The field under validation must not be included in the given list of values.
not_regex:pattern                      // The field under validation must not match the given regular expression.
nullable                               // The field under validation may be null.
numeric                                // The field under validation must be numeric.
present                                // The field under validation must be present in the input data but can be empty.
regex:pattern                          // The field under validation must match the given regular expression.
required                               // The field under validation must be present in the input data and not empty.
required_if:anotherfield,value,...     // The field under validation must be present and not empty if the anotherfield field is equal to any value.
required_unless:anotherfield,value,... // The field under validation must be present and not empty unless the anotherfield field is equal to any value.
required_with:foo,bar,...              // The field under validation must be present and not empty only if any of the other specified fields are present.
required_with_all:foo,bar,...          // The field under validation must be present and not empty only if all of the other specified fields are present.
required_without:foo,bar,...           // The field under validation must be present and not empty only when any of the other specified fields are not present.
required_without_all:foo,bar,...       // The field under validation must be present and not empty only when all of the other specified fields are not present.
same:field                             // The given field must match the field under validation.
size:value                             // The field under validation must have a size matching the given value.
starts_with:foo,bar,...                // The field under validation must start with one of the given values.
string                                 // The field under validation must be a string.
timezone                               // The field under validation must be a valid timezone identifier according to the timezone_identifiers_list PHP function.
unique:table,column,except,idColumn    // The field under validation must not exist within the given database table.
url                                    // The field under validation must be a valid URL.
uuid                                   // The field under validation must be a valid RFC 4122 (version 1, 3, 4, or 5) universally unique identifier (UUID).

/********************************************************************************************
 * ERROR HANDLING
 * https://laravel.com/docs/5.8/errors
 ********************************************************************************************/

/********************************************************************************************
 * MIGRATION COMMANDS
 * https://laravel.com/docs/5.8/migrations
 ********************************************************************************************/

// TABLE OPTIONS

$table->engine = 'InnoDB';             // Specify the table storage engine (MySQL).
$table->charset = 'utf8';              // Specify a default character set for the table (MySQL).
$table->collation = 'utf8_unicode_ci'; // Specify a default collation for the table (MySQL).
$table->temporary();                   // Create a temporary table (except SQL Server).

// COLUMN TYPES

$table->bigIncrements('id');                       // Auto-incrementing UNSIGNED BIGINT (primary key) equivalent column.
$table->bigInteger('votes');                       // BIGINT equivalent column.
$table->binary('data');                            // BLOB equivalent column.
$table->boolean('confirmed');                      // BOOLEAN equivalent column.
$table->char('name', 100);                         // CHAR equivalent column with an optional length.
$table->date('created_at');                        // DATE equivalent column.
$table->dateTime('created_at');                    // DATETIME equivalent column.
$table->dateTimeTz('created_at');                  // DATETIME (with timezone) equivalent column.
$table->decimal('amount', 8, 2);                   // DECIMAL equivalent column with a precision (total digits) and scale (decimal digits).
$table->double('amount', 8, 2);                    // DOUBLE equivalent column with a precision (total digits) and scale (decimal digits).
$table->enum('level', ['easy', 'hard']);           // ENUM equivalent column.
$table->float('amount', 8, 2);                     // FLOAT equivalent column with a precision (total digits) and scale (decimal digits).
$table->geometry('positions');                     // GEOMETRY equivalent column.
$table->geometryCollection('positions');           // GEOMETRYCOLLECTION equivalent column.
$table->increments('id');                          // Auto-incrementing UNSIGNED INTEGER (primary key) equivalent column.
$table->integer('votes');                          // INTEGER equivalent column.
$table->ipAddress('visitor');                      // IP address equivalent column.
$table->json('options');                           // JSON equivalent column.
$table->jsonb('options');                          // JSONB equivalent column.
$table->lineString('positions');                   // LINESTRING equivalent column.
$table->longText('description');                   // LONGTEXT equivalent column.
$table->macAddress('device');                      // MAC address equivalent column.
$table->mediumIncrements('id');                    // Auto-incrementing UNSIGNED MEDIUMINT (primary key) equivalent column.
$table->mediumInteger('votes');                    // MEDIUMINT equivalent column.
$table->mediumText('description');                 // MEDIUMTEXT equivalent column.
$table->morphs('taggable');                        // Adds taggable_id UNSIGNED BIGINT and taggable_type VARCHAR equivalent columns.
$table->uuidMorphs('taggable');                    // Adds taggable_id CHAR(36) and taggable_type VARCHAR(255) UUID equivalent columns.
$table->multiLineString('positions');              // MULTILINESTRING equivalent column.
$table->multiPoint('positions');                   // MULTIPOINT equivalent column.
$table->multiPolygon('positions');                 // MULTIPOLYGON equivalent column.
$table->nullableMorphs('taggable');                // Adds nullable versions of morphs() columns.
$table->nullableUuidMorphs('taggable');            // Adds nullable versions of uuidMorphs() columns.
$table->nullableTimestamps();                      // Alias of timestamps() method.
$table->point('position');                         // POINT equivalent column.
$table->polygon('positions');                      // POLYGON equivalent column.
$table->rememberToken();                           // Adds a nullable remember_token VARCHAR(100) equivalent column.
$table->set('flavors', ['strawberry', 'vanilla']); // SET equivalent column.
$table->smallIncrements('id');                     // Auto-incrementing UNSIGNED SMALLINT (primary key) equivalent column.
$table->smallInteger('votes');                     // SMALLINT equivalent column.
$table->softDeletes();                             // Adds a nullable deleted_at TIMESTAMP equivalent column for soft deletes.
$table->softDeletesTz();                           // Adds a nullable deleted_at TIMESTAMP (with timezone) equivalent column for soft deletes.
$table->string('name', 100);                       // VARCHAR equivalent column with a optional length.
$table->text('description');                       // TEXT equivalent column.
$table->time('sunrise');                           // TIME equivalent column.
$table->timeTz('sunrise');                         // TIME (with timezone) equivalent column.
$table->timestamp('added_on');                     // TIMESTAMP equivalent column.
$table->timestampTz('added_on');                   // TIMESTAMP (with timezone) equivalent column.
$table->timestamps();                              // Adds nullable created_at and updated_at TIMESTAMP equivalent columns.
$table->timestampsTz();                            // Adds nullable created_at and updated_at TIMESTAMP (with timezone) equivalent columns.
$table->tinyIncrements('id');                      // Auto-incrementing UNSIGNED TINYINT (primary key) equivalent column.
$table->tinyInteger('votes');                      // TINYINT equivalent column.
$table->unsignedBigInteger('votes');               // UNSIGNED BIGINT equivalent column.
$table->unsignedDecimal('amount', 8, 2);           // UNSIGNED DECIMAL equivalent column with a precision (total digits) and scale (decimal digits).
$table->unsignedInteger('votes');                  // UNSIGNED INTEGER equivalent column.
$table->unsignedMediumInteger('votes');            // UNSIGNED MEDIUMINT equivalent column.
$table->unsignedSmallInteger('votes');             // UNSIGNED SMALLINT equivalent column.
$table->unsignedTinyInteger('votes');              // UNSIGNED TINYINT equivalent column.
$table->uuid('id');                                // UUID equivalent column.
$table->year('birth_year');                        // YEAR equivalent column.

// COLUMN MODIFIERS

$table->someType()->after('column');              // Place the column "after" another column (MySQL)
$table->someType()->autoIncrement();              // Set INTEGER columns as auto-increment (primary key)
$table->someType()->charset('utf8');              // Specify a character set for the column (MySQL)
$table->someType()->collation('utf8_unicode_ci'); // Specify a collation for the column (MySQL/SQL Server)
$table->someType()->comment('my comment');        // Add a comment to a column (MySQL/PostgreSQL)
$table->someType()->default($value);              // Specify a "default" value for the column
$table->someType()->first();                      // Place the column "first" in the table (MySQL)
$table->someType()->nullable($value = true);      // Allows (by default) NULL values to be inserted into the column
$table->someType()->storedAs($expression);        // Create a stored generated column (MySQL)
$table->someType()->unsigned();                   // Set INTEGER columns as UNSIGNED (MySQL)
$table->someType()->useCurrent();                 // Set TIMESTAMP columns to use CURRENT_TIMESTAMP as default value
$table->someType()->virtualAs($expression);       // Create a virtual generated column (MySQL)
$table->someType()->generatedAs($expression);     // Create an identity column with specified sequence options (PostgreSQL)
$table->someType()->always();                     // Defines the precedence of sequence values over input for an identity column (PostgreSQL)

// UPDATING COLUMNS

$table->someType()->change();       // Allows you to modify some existing column types to a new type or modify the column's attributes.
$table->renameColumn('from', 'to'); // Rename a column

$table->dropColumn('column');       // Drop a given column (accepts an array of columns).
$table->dropRememberToken();        // Drop the remember_token column.
$table->dropSoftDeletes();          // Drop the deleted_at column.
$table->dropSoftDeletesTz();        // Alias of dropSoftDeletes() method.
$table->dropTimestamps();           // Drop the created_at and updated_at columns.
$table->dropTimestampsTz();         // Alias of dropTimestamps() method.

// INDEXES

$table->primary('id');                // Adds a primary key.
$table->primary(['id', 'parent_id']); // Adds composite keys.
$table->unique('email');              // Adds a unique index.
$table->index('state');               // Adds a plain index.
$table->spatialIndex('location');     // Adds a spatial index. (except SQLite)

$table->dropPrimary('users_id_primary');               // Drop a primary key from the "users" table.
$table->dropUnique('users_email_unique');              // Drop a unique index from the "users" table.
$table->dropIndex('geo_state_index');                  // Drop a basic index from the "geo" table.
$table->dropSpatialIndex('geo_location_spatialindex'); // Drop a spatial index from the "geo" table (except SQLite).

// FOREIGN KEY CONSTRAINTS

$table->foreign('user_id')->references('id')->on('users'); // Create foreign key constraints.
$table->dropForeign('posts_user_id_foreign');              // Drop foreign key (accepts an array of strings).

Schema::enableForeignKeyConstraints();  // Enable foreign key constraints within your migrations.
Schema::disableForeignKeyConstraints(); // Disable foreign key constraints within your migrations.

/********************************************************************************************
 * COLLECTION ELOQUENT METHODS
 * https://laravel.com/docs/5.7/collections
 ********************************************************************************************/

all
average
avg
chunk
collapse
combine
concat
contains
containsStrict
count
crossJoin
dd
diff
diffAssoc
diffKeys
dump
each
eachSpread
every
except
filter
first
firstWhere
flatMap
flatten
flip
forget
forPage
get
groupBy
has
implode
intersect
intersectByKeys
isEmpty
isNotEmpty
keyBy
keys
last
macro
make
map
mapInto
mapSpread
mapToGroups
mapWithKeys
max
median
merge
min
mode
nth
only
pad
partition
pipe
pluck
pop
prepend
pull
push
put
random
reduce
reject
reverse
search
shift
shuffle
slice
some
sort
sortBy
sortByDesc
sortKeys
sortKeysDesc
splice
split
sum
take
tap
times
toArray
toJson
transform
union
unique
uniqueStrict
unless
unlessEmpty
unlessNotEmpty
unwrap
values
when
whenEmpty
whenNotEmpty
where
whereStrict
whereBetween
whereIn
whereInStrict
whereInstanceOf
whereNotBetween
whereNotIn
whereNotInStrict
wrap
zip

/********************************************************************************************
 * HTTP TESTS
 * https://laravel.com/docs/5.7/http-tests
 ********************************************************************************************/

$response->assertStatus($code);                            // Assert that the response has a given code.
$response->assertForbidden();                              // Assert that the response has a forbidden status code.
$response->assertNotFound();                               // Assert that the response has a not found status code.
$response->assertOk();                                     // Assert that the response has a 200 status code.
$response->assertSuccessful();                             // Assert that the response has a successful status code.
$response->assertRedirect($uri);                           // Assert that the response is a redirect to a given URI.

$response->assertHeader($headerName, $value = null);       // Assert that the given header is present on the response.
$response->assertHeaderMissing($headerName);               // Assert that the given header is not present on the response.

$response->assertExactJson(array $data);                   // Assert that the response contains an exact match of the given JSON data.
$response->assertJson(array $data);                        // Assert that the response contains the given JSON data.
$response->assertJsonCount($count, $key = null);           // Assert that the response JSON has an array with the expected number of items at the given key.
$response->assertJsonFragment(array $data);                // Assert that the response contains the given JSON fragment.
$response->assertJsonMissing(array $data);                 // Assert that the response does not contain the given JSON fragment.
$response->assertJsonMissingExact(array $data);            // Assert that the response does not contain the exact JSON fragment.
$response->assertJsonMissingValidationErrors($keys);       // Assert that the response has no JSON validation errors for the given keys.
$response->assertJsonStructure(array $structure);          // Assert that the response has a given JSON structure.
$response->assertJsonValidationErrors($keys);              // Assert that the response has the given JSON validation errors for the given keys.

$response->assertDontSee($value);                          // Assert that the given string is not contained within the response.
$response->assertDontSeeText($value);                      // Assert that the given string is not contained within the response text.
$response->assertSee($value);                              // Assert that the given string is contained within the response.
$response->assertSeeInOrder(array $values);                // Assert that the given strings are contained in order within the response.
$response->assertSeeText($value);                          // Assert that the given string is contained within the response text.
$response->assertSeeTextInOrder(array $values);            // Assert that the given strings are contained in order within the response text.

$response->assertCookie($cookieName, $value = null);       // Assert that the response contains the given cookie.
$response->assertCookieExpired($cookieName);               // Assert that the response contains the given cookie and it is expired.
$response->assertCookieNotExpired($cookieName);            // Assert that the response contains the given cookie and it is not expired.
$response->assertCookieMissing($cookieName);               // Assert that the response does not contains the given cookie.
$response->assertPlainCookie($cookieName, $value = null);  // Assert that the response contains the given cookie (unencrypted).

$response->assertSessionHas($key, $value = null);                                             // Assert that the session contains the given piece of data.
$response->assertSessionHasAll(array $data);                                                  // Assert that the session has a given list of values.
$response->assertSessionHasErrors(array $keys, $format = null, $errorBag = 'default');        // Assert that the session contains an error for the given field.
$response->assertSessionHasErrorsIn($errorBag, $keys = [], $format = null);                   // Assert that the session has the given errors.
$response->assertSessionHasNoErrors();                                                        // Assert that the session has no errors.
$response->assertSessionDoesntHaveErrors($keys = [], $format = null, $errorBag = 'default');  // Assert that the session has no errors for the given keys.
$response->assertSessionMissing($key);                                                        // Assert that the session does not contain the given key.

$response->assertViewHas($key, $value = null);             // Assert that the response view was given a piece of data.
$response->assertViewHasAll(array $data);                  // Assert that the response view has a given list of data.
$response->assertViewIs($value);                           // Assert that the given view was returned by the route.
$response->assertViewMissing($key);                        // Assert that the response view is missing a piece of bound data.

$this->assertAuthenticated($guard = null);                           // Assert that the user is authenticated.
$this->assertGuest($guard = null);                                   // Assert that the user is not authenticated.
$this->assertAuthenticatedAs($user, $guard = null);                  // Assert that the given user is authenticated.
$this->assertCredentials(array $credentials, $guard = null);         // $this->assertCredentials(array $credentials, $guard = null).
$this->assertInvalidCredentials(array $credentials, $guard = null);  // Assert that the given credentials are invalid.

/********************************************************************************************
 * LARAVEL VALET COMMANDS
 * https://laravel.com/docs/6.0/valet
 ********************************************************************************************/

valet install     // Install the Valet daemon.
valet uninstall   // Uninstall the Valet daemon.
valet use php@7.2 // Allows you to switch between php versions.

valet start       // Start the Valet daemon.
valet stop        // Stop the Valet daemon.
valet restart     // Restart the Valet daemon.

valet park        // Register your current working directory as a path which Valet should search for sites.
valet forget      // Run this command from a "parked" directory to remove it from the parked directory list.
valet paths       // View all of your "parked" paths.

valet link <name>   // Link a single site in the current directory and not the entire directory.
valet unlink <name> // Unlink a single site in the current directory
valet links         // View all of your "linked" paths.

valet secure      // Serve site into https
valet unsecure    // Revert back to http

valet log          // View a list of logs which are written by Valet's services.
valet trust        // Add sudoers files for Brew and Valet to allow Valet commands to be run without prompting for passwords.
valet tld <suffix> // Update tld for your domains (default to test).
valet share        // Share your site with the world.
```
