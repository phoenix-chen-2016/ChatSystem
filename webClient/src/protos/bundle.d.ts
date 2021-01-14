import * as $protobuf from "protobufjs";
/** Namespace chat. */
export namespace chat {

    /** Properties of a QueuePacket. */
    interface IQueuePacket {

        /** QueuePacket sessionId */
        sessionId?: (string|null);

        /** QueuePacket payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a QueuePacket. */
    class QueuePacket implements IQueuePacket {

        /**
         * Constructs a new QueuePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IQueuePacket);

        /** QueuePacket sessionId. */
        public sessionId: string;

        /** QueuePacket payload. */
        public payload: Uint8Array;

        /**
         * Creates a new QueuePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueuePacket instance
         */
        public static create(properties?: chat.IQueuePacket): chat.QueuePacket;

        /**
         * Encodes the specified QueuePacket message. Does not implicitly {@link chat.QueuePacket.verify|verify} messages.
         * @param message QueuePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IQueuePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueuePacket message, length delimited. Does not implicitly {@link chat.QueuePacket.verify|verify} messages.
         * @param message QueuePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IQueuePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueuePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueuePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.QueuePacket;

        /**
         * Decodes a QueuePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueuePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.QueuePacket;

        /**
         * Verifies a QueuePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueuePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueuePacket
         */
        public static fromObject(object: { [k: string]: any }): chat.QueuePacket;

        /**
         * Creates a plain object from a QueuePacket message. Also converts values to other types if specified.
         * @param message QueuePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.QueuePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueuePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage subject */
        subject?: (string|null);

        /** ChatMessage payload */
        payload?: (Uint8Array|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChatMessage);

        /** ChatMessage subject. */
        public subject: string;

        /** ChatMessage payload. */
        public payload: Uint8Array;

        /**
         * Creates a new ChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMessage instance
         */
        public static create(properties?: chat.IChatMessage): chat.ChatMessage;

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link chat.ChatMessage.verify|verify} messages.
         * @param message ChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ChatMessage;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ChatMessage;

        /**
         * Verifies a ChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatMessage
         */
        public static fromObject(object: { [k: string]: any }): chat.ChatMessage;

        /**
         * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
         * @param message ChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** LoginStatus enum. */
    enum LoginStatus {
        REJECT = 0,
        ACCPET = 1
    }

    /** Properties of a LoginReply. */
    interface ILoginReply {

        /** LoginReply status */
        status?: (chat.LoginStatus|null);

        /** LoginReply name */
        name?: (string|null);
    }

    /** Represents a LoginReply. */
    class LoginReply implements ILoginReply {

        /**
         * Constructs a new LoginReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ILoginReply);

        /** LoginReply status. */
        public status: chat.LoginStatus;

        /** LoginReply name. */
        public name: string;

        /**
         * Creates a new LoginReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReply instance
         */
        public static create(properties?: chat.ILoginReply): chat.LoginReply;

        /**
         * Encodes the specified LoginReply message. Does not implicitly {@link chat.LoginReply.verify|verify} messages.
         * @param message LoginReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ILoginReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginReply message, length delimited. Does not implicitly {@link chat.LoginReply.verify|verify} messages.
         * @param message LoginReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ILoginReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.LoginReply;

        /**
         * Decodes a LoginReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.LoginReply;

        /**
         * Verifies a LoginReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginReply
         */
        public static fromObject(object: { [k: string]: any }): chat.LoginReply;

        /**
         * Creates a plain object from a LoginReply message. Also converts values to other types if specified.
         * @param message LoginReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.LoginReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginReply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRegistration. */
    interface ILoginRegistration {

        /** LoginRegistration name */
        name?: (string|null);

        /** LoginRegistration channel */
        channel?: (string|null);
    }

    /** Represents a LoginRegistration. */
    class LoginRegistration implements ILoginRegistration {

        /**
         * Constructs a new LoginRegistration.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.ILoginRegistration);

        /** LoginRegistration name. */
        public name: string;

        /** LoginRegistration channel. */
        public channel: string;

        /**
         * Creates a new LoginRegistration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRegistration instance
         */
        public static create(properties?: chat.ILoginRegistration): chat.LoginRegistration;

        /**
         * Encodes the specified LoginRegistration message. Does not implicitly {@link chat.LoginRegistration.verify|verify} messages.
         * @param message LoginRegistration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.ILoginRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRegistration message, length delimited. Does not implicitly {@link chat.LoginRegistration.verify|verify} messages.
         * @param message LoginRegistration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.ILoginRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRegistration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.LoginRegistration;

        /**
         * Decodes a LoginRegistration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRegistration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.LoginRegistration;

        /**
         * Verifies a LoginRegistration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRegistration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRegistration
         */
        public static fromObject(object: { [k: string]: any }): chat.LoginRegistration;

        /**
         * Creates a plain object from a LoginRegistration message. Also converts values to other types if specified.
         * @param message LoginRegistration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.LoginRegistration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRegistration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Scope enum. */
    enum Scope {
        NONE = 0,
        PERSON = 1,
        ROOM = 2,
        SYSTEM = 3
    }

    /** Properties of a ChatContent. */
    interface IChatContent {

        /** ChatContent scope */
        scope?: (chat.Scope|null);

        /** ChatContent message */
        message?: (string|null);

        /** ChatContent target */
        target?: (string|null);
    }

    /** Represents a ChatContent. */
    class ChatContent implements IChatContent {

        /**
         * Constructs a new ChatContent.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IChatContent);

        /** ChatContent scope. */
        public scope: chat.Scope;

        /** ChatContent message. */
        public message: string;

        /** ChatContent target. */
        public target: string;

        /**
         * Creates a new ChatContent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatContent instance
         */
        public static create(properties?: chat.IChatContent): chat.ChatContent;

        /**
         * Encodes the specified ChatContent message. Does not implicitly {@link chat.ChatContent.verify|verify} messages.
         * @param message ChatContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IChatContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChatContent message, length delimited. Does not implicitly {@link chat.ChatContent.verify|verify} messages.
         * @param message ChatContent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IChatContent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatContent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.ChatContent;

        /**
         * Decodes a ChatContent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.ChatContent;

        /**
         * Verifies a ChatContent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChatContent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChatContent
         */
        public static fromObject(object: { [k: string]: any }): chat.ChatContent;

        /**
         * Creates a plain object from a ChatContent message. Also converts values to other types if specified.
         * @param message ChatContent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.ChatContent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChatContent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
