window.SIDEBAR_ITEMS = {"derive":[["AmbiguitySetLabel","Generates an impl of the `AmbiguitySetLabel` trait."],["Bundle",""],["Component",""],["Resource",""],["RunCriteriaLabel","Generates an impl of the `RunCriteriaLabel` trait."],["StageLabel","Generates an impl of the `StageLabel` trait."],["SystemLabel","Generates an impl of the `SystemLabel` trait."]],"struct":[["Added","A filter on a component that only retains results added after the system last ran."],["AnyOf","The `AnyOf` query parameter fetches entities with any of the component types included in T."],["ChangeTrackers","[`WorldQuery`] that tracks changes and additions for component `T`."],["Changed","A filter on a component that only retains results added or mutably dereferenced after the system last ran."],["Commands","A queue of commands that get executed at the end of the stage of the system that called them."],["Entity","Lightweight identifier of an entity."],["EventReader","Reads events of type `T` in order and tracks which events have already been read."],["EventWriter","Sends events of type `T`."],["Events","An event collection that represents the events that occurred within the last two [`Events::update`] calls. Events can be written to using an [`EventWriter`] and are typically cheaply read using an [`EventReader`]."],["In","Wrapper type to mark a [`SystemParam`] as an input."],["Local","A system local [`SystemParam`]."],["Mut","Unique mutable borrow of an entity’s component"],["NonSend","Shared borrow of a non-[`Send`] resource."],["NonSendMut","Unique borrow of a non-[`Send`] resource."],["Or","A filter that tests if any of the given filters apply."],["ParallelCommands","An alternative to [`Commands`] that can be used in parallel contexts, such as those in `Query::par_for_each`"],["ParamSet",""],["Query","Provides scoped access to components in a [`World`]."],["QueryState","Provides scoped access to a [`World`] state according to a given [`WorldQuery`] and query filter."],["ReflectComponent","A struct used to operate on reflected [`Component`] of a type."],["ReflectResource","A struct used to operate on reflected [`Resource`] of a type."],["RemovedComponents","A [`SystemParam`] that grants access to the entities that had their `T` [`Component`] removed."],["Res","Shared borrow of a [`Resource`]."],["ResMut","Unique mutable borrow of a [`Resource`]."],["RunCriteria",""],["Schedule","A container of [`Stage`]s set to be run in a linear order."],["State","Stack based state machine"],["SystemSet","A builder for describing several systems at the same time."],["SystemStage","Stores and executes systems. Execution order is not defined unless explicitly specified; see `SystemDescriptor` documentation."],["With","Filter that selects entities with a component `T`."],["Without","Filter that selects entities without a component `T`."],["World","Stores and exposes operations on entities, components, resources, and their associated metadata."]],"trait":[["AmbiguitySetLabel","A strongly-typed class of labels used to identify sets of systems with intentionally ambiguous execution order."],["Bundle","An ordered collection of [`Component`]s."],["Component","A data type that can be used to store data for an entity."],["DetectChanges","Types that implement reliable change detection."],["ExclusiveSystemDescriptorCoercion",""],["FromWorld","Creates an instance of the type this trait is implemented for using data from the supplied [World]."],["IntoChainSystem","An extension trait providing the [`IntoChainSystem::chain`] method for convenient [`System`] chaining."],["IntoExclusiveSystem",""],["IntoSystem","Conversion trait to turn something into a [`System`]."],["ParallelSystemDescriptorCoercion",""],["Resource","A type that can be inserted into a [`World`] as a singleton."],["RunCriteriaDescriptorCoercion",""],["RunCriteriaLabel","A strongly-typed class of labels used to identify run criteria."],["Stage","A type that can run as a step of a `Schedule`."],["StageLabel","A strongly-typed class of labels used to identify `Stage`s."],["System","An ECS system that can be added to a `Schedule`"],["SystemLabel","A strongly-typed class of labels used to identify `System`s."],["SystemParamFunction","A trait implemented for all functions that can be used as [`System`]s."]]};