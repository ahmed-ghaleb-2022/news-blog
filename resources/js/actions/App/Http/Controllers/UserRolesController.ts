import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
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
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserRolesController::index
 * @see app/Http/Controllers/UserRolesController.php:12
 * @route '/user-roles'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
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
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserRolesController::create
 * @see app/Http/Controllers/UserRolesController.php:21
 * @route '/user-roles/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:29
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
 * @see app/Http/Controllers/UserRolesController.php:29
 * @route '/user-roles'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:29
 * @route '/user-roles'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:29
 * @route '/user-roles'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::store
 * @see app/Http/Controllers/UserRolesController.php:29
 * @route '/user-roles'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:37
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
 * @see app/Http/Controllers/UserRolesController.php:37
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
 * @see app/Http/Controllers/UserRolesController.php:37
 * @route '/user-roles/{user_role}'
 */
show.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:37
 * @route '/user-roles/{user_role}'
 */
show.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:37
 * @route '/user-roles/{user_role}'
 */
    const showForm = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:37
 * @route '/user-roles/{user_role}'
 */
        showForm.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserRolesController::show
 * @see app/Http/Controllers/UserRolesController.php:37
 * @route '/user-roles/{user_role}'
 */
        showForm.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:45
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
 * @see app/Http/Controllers/UserRolesController.php:45
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
 * @see app/Http/Controllers/UserRolesController.php:45
 * @route '/user-roles/{user_role}/edit'
 */
edit.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:45
 * @route '/user-roles/{user_role}/edit'
 */
edit.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:45
 * @route '/user-roles/{user_role}/edit'
 */
    const editForm = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:45
 * @route '/user-roles/{user_role}/edit'
 */
        editForm.get = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\UserRolesController::edit
 * @see app/Http/Controllers/UserRolesController.php:45
 * @route '/user-roles/{user_role}/edit'
 */
        editForm.head = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:53
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
 * @see app/Http/Controllers/UserRolesController.php:53
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
 * @see app/Http/Controllers/UserRolesController.php:53
 * @route '/user-roles/{user_role}'
 */
update.put = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:53
 * @route '/user-roles/{user_role}'
 */
update.patch = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:53
 * @route '/user-roles/{user_role}'
 */
    const updateForm = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:53
 * @route '/user-roles/{user_role}'
 */
        updateForm.put = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\UserRolesController::update
 * @see app/Http/Controllers/UserRolesController.php:53
 * @route '/user-roles/{user_role}'
 */
        updateForm.patch = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:61
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
 * @see app/Http/Controllers/UserRolesController.php:61
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
 * @see app/Http/Controllers/UserRolesController.php:61
 * @route '/user-roles/{user_role}'
 */
destroy.delete = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:61
 * @route '/user-roles/{user_role}'
 */
    const destroyForm = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UserRolesController::destroy
 * @see app/Http/Controllers/UserRolesController.php:61
 * @route '/user-roles/{user_role}'
 */
        destroyForm.delete = (args: { user_role: string | number } | [user_role: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const UserRolesController = { index, create, store, show, edit, update, destroy }

export default UserRolesController