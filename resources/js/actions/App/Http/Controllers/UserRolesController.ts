import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:14
 * @route '/user-roles'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/user-roles',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:14
 * @route '/user-roles'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:14
 * @route '/user-roles'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:14
 * @route '/user-roles'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:23
 * @route '/user-roles/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/user-roles/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:23
 * @route '/user-roles/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:23
 * @route '/user-roles/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:23
 * @route '/user-roles/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:31
 * @route '/user-roles'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/user-roles',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:31
 * @route '/user-roles'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:31
 * @route '/user-roles'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:39
 * @route '/user-roles/{user_role}'
 */
export const show = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/user-roles/{user_role}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:39
 * @route '/user-roles/{user_role}'
 */
show.url = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_role: args.user_role,
                }

    return show.definition.url
            .replace('{user_role}', parsedArgs.user_role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:39
 * @route '/user-roles/{user_role}'
 */
show.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:39
 * @route '/user-roles/{user_role}'
 */
show.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:47
 * @route '/user-roles/{user_role}/edit'
 */
export const edit = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/user-roles/{user_role}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:47
 * @route '/user-roles/{user_role}/edit'
 */
edit.url = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_role: args.user_role,
                }

    return edit.definition.url
            .replace('{user_role}', parsedArgs.user_role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:47
 * @route '/user-roles/{user_role}/edit'
 */
edit.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:47
 * @route '/user-roles/{user_role}/edit'
 */
edit.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:57
 * @route '/user-roles/{user_role}'
 */
export const update = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/user-roles/{user_role}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:57
 * @route '/user-roles/{user_role}'
 */
update.url = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_role: args.user_role,
                }

    return update.definition.url
            .replace('{user_role}', parsedArgs.user_role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:57
 * @route '/user-roles/{user_role}'
 */
update.put = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:57
 * @route '/user-roles/{user_role}'
 */
update.patch = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:67
 * @route '/user-roles/{user_role}'
 */
export const destroy = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/user-roles/{user_role}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:67
 * @route '/user-roles/{user_role}'
 */
destroy.url = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { user_role: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    user_role: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        user_role: args.user_role,
                }

    return destroy.definition.url
            .replace('{user_role}', parsedArgs.user_role.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:67
 * @route '/user-roles/{user_role}'
 */
destroy.delete = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const UserRolesController = { index, create, store, show, edit, update, destroy }

export default UserRolesController