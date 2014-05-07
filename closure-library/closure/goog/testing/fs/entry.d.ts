/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/fs/error.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../../closure/goog/crypt/base64.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/blob.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/file.d.ts" />
/// <reference path="../../../../closure/goog/fs/entry.d.ts" />
/// <reference path="../../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesaver.d.ts" />
/// <reference path="../../../../closure/goog/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../../closure/goog/fs/entryimpl.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/filesystem.d.ts" />
/// <reference path="../../../../closure/_window.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock filesystem entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    class Entry implements goog.fs.Entry {
        /**
         * A mock filesystem entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry.
         * @param {string} name The name of this entry.
         * @constructor
         * @implements {goog.fs.Entry}
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string);
    
        /**
         * Whether or not this entry has been deleted.
         * @type {boolean}
         */
        deleted: boolean;
    
        /**
         * @return {boolean} Whether or not this entry is a file.
         */
        isFile(): boolean;
    
        /**
         * @return {boolean} Whether or not this entry is a directory.
         */
        isDirectory(): boolean;
    
        /**
         * @return {string} The name of this entry.
         */
        getName(): string;
    
        /**
         * @return {string} The full path to this entry.
         */
        getFullPath(): string;
    
        /**
         * @return {!goog.fs.FileSystem} The filesystem backing this entry.
         */
        getFileSystem(): goog.fs.FileSystem;
    
        /**
         * Retrieves the last modified date for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Date for this entry. If an error
         *     occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getLastModified(): goog.async.Deferred<any>;
    
        /**
         * Retrieves the metadata for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Metadata for this entry. If an
         *     error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getMetadata(): goog.async.Deferred<any>;
    
        /**
         * Move this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The new name of the entry. If omitted, the entry
         *     retains its original name.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        moveTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * Copy this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The name of the new entry. If omitted, the new
         *     entry has the same name as the original.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        copyTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * @return {!goog.testing.fs.Entry} A shallow copy of this entry object.
         */
        clone(): goog.testing.fs.Entry;
    
        /**
         * Get the URL for this file.
         *
         * @param {string=} opt_mimeType The MIME type that will be served for the URL.
         * @return {string} The URL.
         */
        toUrl(opt_mimeType?: string): string;
    
        /**
         * Get the URI for this file.
         *
         * @deprecated Use {@link #toUrl} instead.
         * @param {string=} opt_mimeType The MIME type that will be served for the URI.
         * @return {string} The URI.
         */
        toUri(opt_mimeType?: string): string;
    
        /**
         * Wrap an HTML5 entry object in an appropriate subclass instance.
         *
         * @param {!Entry} entry The underlying Entry object.
         * @return {!goog.fs.Entry} The appropriate subclass wrapper.
         * @protected
         */
        wrapEntry(entry: Entry): goog.fs.Entry;
    
        /**
         * Remove this entry.
         *
         * @return {!goog.async.Deferred} A deferred object. If the removal succeeds,
         *     the callback is called with true. If an error occurs, the errback is
         *     called a {@link goog.fs.Error}.
         */
        remove(): goog.async.Deferred<any>;
    
        /**
         * Gets the parent directory.
         *
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.DirectoryEntry}.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getParent(): goog.async.Deferred<any>;
    
        /**
         * Return a deferred that will call its errback if this entry has been deleted.
         * In addition, the deferred will only run after a timeout of 0, and all its
         * callbacks will run with the entry as "this".
         *
         * @param {string} action The name of the action being performed. For error
         *     reporting.
         * @return {!goog.async.Deferred} The deferred that will be called after a
         *     timeout of 0.
         * @protected
         */
        checkNotDeleted(action: string): goog.async.Deferred<any>;
    }

    /**
     * A mock directory entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry. If this is null, that means this is the root
     *     directory and so is its own parent.
     * @param {string} name The name of this entry.
     * @param {!Object.<!goog.testing.fs.Entry>} children The map of child names to
     *     entry objects.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    class DirectoryEntry extends goog.testing.fs.Entry implements goog.fs.DirectoryEntry {
        /**
         * A mock directory entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry. If this is null, that means this is the root
         *     directory and so is its own parent.
         * @param {string} name The name of this entry.
         * @param {!Object.<!goog.testing.fs.Entry>} children The map of child names to
         *     entry objects.
         * @constructor
         * @extends {goog.testing.fs.Entry}
         * @implements {goog.fs.DirectoryEntry}
         * @final
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, children: { [key: string]: any /*missing*/ });
    
        /**
         * @return {boolean} Whether or not this entry is a file.
         */
        isFile(): boolean;
    
        /**
         * @return {boolean} Whether or not this entry is a directory.
         */
        isDirectory(): boolean;
    
        /**
         * Retrieves the last modified date for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Date for this entry. If an error
         *     occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getLastModified(): goog.async.Deferred<any>;
    
        /**
         * Retrieves the metadata for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Metadata for this entry. If an
         *     error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getMetadata(): goog.async.Deferred<any>;
    
        /**
         * Remove this entry.
         *
         * @return {!goog.async.Deferred} A deferred object. If the removal succeeds,
         *     the callback is called with true. If an error occurs, the errback is
         *     called a {@link goog.fs.Error}.
         */
        remove(): goog.async.Deferred<any>;
    
        /**
         * Get a file in the directory.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     handling an existing file, or the lack thereof.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry}. If an
         *     error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getFile(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.async.Deferred<any>;
    
        /**
         * Get a directory within this directory.
         *
         * @param {string} path The path to the directory, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     handling an existing directory, or the lack thereof.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.DirectoryEntry}.
         *     If an error occurs, the errback is called a {@link goog.fs.Error}.
         */
        getDirectory(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.async.Deferred<any>;
    
        /**
         * Get a file entry synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the file.
         * @param {string=} opt_data The string data encapsulated by the blob.
         * @param {string=} opt_type The mime type of the blob.
         * @return {!goog.testing.fs.FileEntry} The loaded file.
         */
        getFileSync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior, opt_data?: string, opt_type?: string): goog.testing.fs.FileEntry;
    
        /**
         * Creates a file synchronously. This is a shorthand for getFileSync, useful for
         * setting up tests.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @return {!goog.testing.fs.FileEntry} The created file.
         */
        createFileSync(path: string): goog.testing.fs.FileEntry;
    
        /**
         * Get a directory synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the directory, relative to this one.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the directory.
         * @return {!goog.testing.fs.DirectoryEntry} The loaded directory.
         */
        getDirectorySync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.testing.fs.DirectoryEntry;
    
        /**
         * Creates a directory synchronously. This is a shorthand for getFileSync,
         * useful for setting up tests.
         *
         * @param {string} path The path to the directory, relative to this directory.
         * @return {!goog.testing.fs.DirectoryEntry} The created directory.
         */
        createDirectorySync(path: string): goog.testing.fs.DirectoryEntry;
    
        /**
         * Returns whether this directory has a child with the given name.
         *
         * @param {string} name The name of the entry to check for.
         * @return {boolean} Whether or not this has a child with the given name.
         */
        hasChild(name: string): boolean;
    
        /**
         * Removes this directory and all its contents.
         *
         * @return {!goog.async.Deferred} A deferred object. If the removal succeeds,
         *     the callback is called with true. If an error occurs, the errback is
         *     called a {@link goog.fs.Error}.
         */
        removeRecursively(): goog.async.Deferred<any>;
    
        /**
         * Gets a list of all entries in this directory.
         *
         * @return {!goog.async.Deferred} The deferred list of {@link goog.fs.Entry}
         *     results. If an error occurs, the errback is called with a
         *     {@link goog.fs.Error}.
         */
        listDirectory(): goog.async.Deferred<any>;
    
        /**
         * Opens the directory for the specified path, creating the directory and any
         * intermediate directories as necessary.
         *
         * @param {string} path The directory path to create. May be absolute or
         *     relative to the current directory. The parent directory ".." and current
         *     directory "." are supported.
         * @return {!goog.async.Deferred} A deferred {@link goog.fs.DirectoryEntry} for
         *     the requested path. If an error occurs, the errback is called with a
         *     {@link goog.fs.Error}.
         */
        createPath(path: string): goog.async.Deferred<any>;
    
        /**
         * @return {string} The name of this entry.
         */
        getName(): string;
    
        /**
         * @return {string} The full path to this entry.
         */
        getFullPath(): string;
    
        /**
         * @return {!goog.fs.FileSystem} The filesystem backing this entry.
         */
        getFileSystem(): goog.fs.FileSystem;
    
        /**
         * Move this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The new name of the entry. If omitted, the entry
         *     retains its original name.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        moveTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * Copy this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The name of the new entry. If omitted, the new
         *     entry has the same name as the original.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        copyTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * Wrap an HTML5 entry object in an appropriate subclass instance.
         *
         * @param {!Entry} entry The underlying Entry object.
         * @return {!goog.fs.Entry} The appropriate subclass wrapper.
         * @protected
         */
        wrapEntry(entry: Entry): goog.fs.Entry;
    
        /**
         * Get the URL for this file.
         *
         * @param {string=} opt_mimeType The MIME type that will be served for the URL.
         * @return {string} The URL.
         */
        toUrl(opt_mimeType?: string): string;
    
        /**
         * Get the URI for this file.
         *
         * @deprecated Use {@link #toUrl} instead.
         * @param {string=} opt_mimeType The MIME type that will be served for the URI.
         * @return {string} The URI.
         */
        toUri(opt_mimeType?: string): string;
    
        /**
         * Gets the parent directory.
         *
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.DirectoryEntry}.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getParent(): goog.async.Deferred<any>;
    }

    /**
     * A mock file entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @param {string} data The data initially contained in the file.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    class FileEntry extends goog.testing.fs.Entry implements goog.fs.FileEntry {
        /**
         * A mock file entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry.
         * @param {string} name The name of this entry.
         * @param {string} data The data initially contained in the file.
         * @param {string=} opt_type The mime type of the blob.
         * @constructor
         * @extends {goog.testing.fs.Entry}
         * @implements {goog.fs.FileEntry}
         * @final
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, data: string, opt_type?: string);
    
        /**
         * @return {boolean} Whether or not this entry is a file.
         */
        isFile(): boolean;
    
        /**
         * @return {boolean} Whether or not this entry is a directory.
         */
        isDirectory(): boolean;
    
        /**
         * Retrieves the last modified date for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Date for this entry. If an error
         *     occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getLastModified(): goog.async.Deferred<any>;
    
        /**
         * Retrieves the metadata for this entry.
         *
         * @return {!goog.async.Deferred} The deferred Metadata for this entry. If an
         *     error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getMetadata(): goog.async.Deferred<any>;
    
        /**
         * Create a writer for writing to the file.
         *
         * @return {!goog.async.Deferred.<!goog.fs.FileWriter>} If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        createWriter(): goog.async.Deferred<goog.fs.FileWriter>;
    
        /**
         * Get the file contents as a File blob.
         *
         * @return {!goog.async.Deferred.<!File>} If an error occurs, the errback is
         *     called with a {@link goog.fs.Error}.
         */
        file(): goog.async.Deferred<_window._File>;
    
        /**
         * Get the internal file representation synchronously, without waiting for a
         * Deferred to resolve.
         *
         * @return {!goog.testing.fs.File} The internal file blob referenced by this
         *     FileEntry.
         */
        fileSync(): goog.testing.fs.File;
    
        /**
         * @return {string} The name of this entry.
         */
        getName(): string;
    
        /**
         * @return {string} The full path to this entry.
         */
        getFullPath(): string;
    
        /**
         * @return {!goog.fs.FileSystem} The filesystem backing this entry.
         */
        getFileSystem(): goog.fs.FileSystem;
    
        /**
         * Move this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The new name of the entry. If omitted, the entry
         *     retains its original name.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        moveTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * Copy this entry to a new location.
         *
         * @param {!goog.fs.DirectoryEntry} parent The new parent directory.
         * @param {string=} opt_newName The name of the new entry. If omitted, the new
         *     entry has the same name as the original.
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileEntry} or
         *     {@link goog.fs.DirectoryEntry} for the new entry. If an error occurs, the
         *     errback is called with a {@link goog.fs.Error}.
         */
        copyTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred<any>;
    
        /**
         * Wrap an HTML5 entry object in an appropriate subclass instance.
         *
         * @param {!Entry} entry The underlying Entry object.
         * @return {!goog.fs.Entry} The appropriate subclass wrapper.
         * @protected
         */
        wrapEntry(entry: Entry): goog.fs.Entry;
    
        /**
         * Get the URL for this file.
         *
         * @param {string=} opt_mimeType The MIME type that will be served for the URL.
         * @return {string} The URL.
         */
        toUrl(opt_mimeType?: string): string;
    
        /**
         * Get the URI for this file.
         *
         * @deprecated Use {@link #toUrl} instead.
         * @param {string=} opt_mimeType The MIME type that will be served for the URI.
         * @return {string} The URI.
         */
        toUri(opt_mimeType?: string): string;
    
        /**
         * Remove this entry.
         *
         * @return {!goog.async.Deferred} A deferred object. If the removal succeeds,
         *     the callback is called with true. If an error occurs, the errback is
         *     called a {@link goog.fs.Error}.
         */
        remove(): goog.async.Deferred<any>;
    
        /**
         * Gets the parent directory.
         *
         * @return {!goog.async.Deferred} The deferred {@link goog.fs.DirectoryEntry}.
         *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
         */
        getParent(): goog.async.Deferred<any>;
    }
}

